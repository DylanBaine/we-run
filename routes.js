class RouteDefinition {
  constructor(path) {
    this.path = path;
  }
}

export const welcome = new RouteDefinition("/");
export const dashboard = new RouteDefinition("/dashboard");
export const login = new RouteDefinition("/login");
export const register = new RouteDefinition("/register");
export const resetPassword = new RouteDefinition("/reset-password");
