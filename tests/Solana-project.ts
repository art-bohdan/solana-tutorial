import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SolanaProject } from "../target/types/solana_project";
import { expect } from "chai";

// describe("Solana-project", () => {
//   // Configure the client to use the local cluster.
//   anchor.setProvider(anchor.AnchorProvider.env());

//   const program = anchor.workspace.SolanaProject as Program<SolanaProject>;

//   it("Is initialized!", async () => {
//     // Add your test here.
//     const tx = await program.methods.initialize().rpc();
//     console.log("Your transaction signature", tx);
//   });
// });

describe("SolanaProject", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.SolanaProject as Program<SolanaProject>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });

  // it("Is init counter", async () => {
  //   await program.state.rpc.new({
  //     accounts: {
  //       authority: program.provider.publicKey,
  //     },
  //   });
  //   const state = await program.state.fetch();
  //   expect(state.count.toNumber()).to.eq(0);
  // });

  // it("It incrise counter", async () => {
  //   await program.state.rpc.inc({
  //     accounts: {
  //       authority: program.provider.publicKey,
  //     },
  //   });
  //   const state = await program.state.fetch();
  //   expect(state.count.toNumber()).to.eq(1);
  // });
});
