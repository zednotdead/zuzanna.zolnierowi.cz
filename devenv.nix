{
  pkgs,
  lib,
  config,
  inputs,
  ...
}: {
  languages.javascript = {
    enable = true;
    nodejs.enable = true;
    npm.enable = true;
  };

  languages.typescript = {
    enable = true;
    lsp.enable = true;
  };
}
