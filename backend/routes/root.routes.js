import authRoutes from "./auth.routes.js";

const routes = [
    { path: "/api/auth", handler: authRoutes },

];

export default function initRoutes(app) {
    routes.forEach((route) => app.use(route.path, route.handler));
}