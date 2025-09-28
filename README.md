# bun-plugin-workers

A reproduction repo for using [Bun plugins within Workers](https://github.com/oven-sh/bun/issues/12608).

## Setup

1. Have Bun >= `1.2.22` installed
1. Clone the repo
1. Run `bun i`

## Reproduction

These reproductions are exploring overriding Bun's TypeScript with "raw" `tsc` based transformation in order to [get support for Decorators](https://github.com/oven-sh/bun/issues/4122).

### Non Workers

When using a custom plugin in normal usage, everything runs as expected.

```sh
➜  bun-plugin-workers git:(master) ✗ bun handler.ts
onLoad {
  args: {
    path: "/Users/owenbuckley/Workspace/github/bun-plugin-workers/simple-greeting.ts",
  },
}
{
  ssrContents: "<!--lit-part My2136iVtRs=-->\n  <!--lit-node 0--><simple-greeting ></simple-greeting>\n<!--/lit-part-->",
}
```

### Workers

When running the Workers version, it crashes and there's no sign that the custom plugin ran.

```sh
➜  bun-plugin-workers git:(master) ✗ bun handler-worker.ts 
Worker error: Error: 2 errors building "/Users/owenbuckley/Workspace/github/bun-plugin-workers/simple-greeting.ts"
error: 2 errors building "/Users/owenbuckley/Workspace/github/bun-plugin-workers/simple-greeting.ts"
Worker stopped with exit code 1

Bun v1.2.22 (macOS arm64)
```