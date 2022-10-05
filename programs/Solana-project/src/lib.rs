use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod solana_project {
    use super::*;

    pub fn initialize(_ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
    #[state]
    pub struct Counter {
        pub authority: Pubkey,
        pub count: u64,
    }
    impl Counter {
        pub fn new (ctx:Context<Auth>) -> anchor_lang::Result<Self> {
            Ok(Self {
                authority: *ctx.accounts.authority.key,
                count:0,
            })
        }
        pub fn inc(&mut self, ctx:Context<Auth>) -> anchor_lang::Result<()> {
            if &self.authority != ctx.accounts.authority.key {
                return Err(error!(ErrorCode::Unauthtorized));
            }
            self.count += 1;
            Ok(())
        }
    }
    
}

#[derive(Accounts)]
pub struct Initialize {}

#[derive(Accounts)]
pub struct Auth<'info> {
    authority: Signer<'info>,
}

#[error_code]
pub enum ErrorCode {
    #[msg("You are not authorized")]
    Unauthtorized,
}
