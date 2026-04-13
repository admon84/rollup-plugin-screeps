declare module '@admon-dev/screeps-api' {
  interface ScreepsAPIOptions {
    email?: string;
    password?: string;
    token?: string;
    protocol?: string;
    hostname?: string;
    port?: number;
    path?: string;
    branch?: string;
  }

  interface BranchInfo {
    branch: string;
  }

  type CodeList = Record<string, string | { binary: string }>;

  class ScreepsAPI {
    token: string | undefined;
    constructor(options: ScreepsAPIOptions);
    auth(email: string | undefined, password: string | undefined): Promise<{ ok: boolean; token: string }>;
    raw: {
      user: {
        branches(): Promise<{ ok: boolean; list: BranchInfo[] }>;
        cloneBranch(from: string, branch: string, code: CodeList): Promise<unknown>;
      };
    };
    code: {
      set(branch: string, code: CodeList, modules: null): Promise<unknown>;
    };
  }

  export { ScreepsAPI };
}
