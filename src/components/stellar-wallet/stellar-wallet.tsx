import { Component, State } from "@stencil/core";

import componentWillLoad from "./events/componentWillLoad";
import render from "./events/render";

import createAccount from "./methods/createAccount";
import copyAddress from "./methods/copyAddress";
import copySecret from "./methods/copySecret";
import signOut from "./methods/signOut";
import setPrompt from "./methods/setPrompt";

import { Prompter } from "@stellar-prompt/stellar-prompt";

interface StellarAccount {
  publicKey: string;
  keystore: string;
}

@Component({
  tag: "stellar-wallet",
  styleUrl: "stellar-wallet.scss",
  shadow: true,
})

export class StellarWallet {
  @State() account: StellarAccount;
  @State() prompter: Prompter = { show: false };
  @State() error: any = null;

  // Component events
  componentWillLoad() {}
  render() {}

  // Stellar methods
  createAccount = createAccount;
  copyAddress = copyAddress;
  copySecret = copySecret;
  signOut = signOut;

  // Misc methods
  setPrompt = setPrompt;
}

StellarWallet.prototype.componentWillLoad = componentWillLoad;
StellarWallet.prototype.render = render;
