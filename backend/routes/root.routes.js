import authRoutes from "./auth.routes.js";
import messagesRoutes from "./message.routes.js";

const routes = [
    { path: "/api/auth", handler: authRoutes },
    { path: "/api/messages", handler: messagesRoutes },

];

export default function initRoutes(app) {
    routes.forEach((route) => app.use(route.path, route.handler));
}