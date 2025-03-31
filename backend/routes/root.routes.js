import authRoutes from "./auth.routes.js";
import messagesRoutes from "./message.routes.js";
import userRoutes from "./user.routes.js";

const routes = [
    { path: "/api/auth", handler: authRoutes },
    { path: "/api/messages", handler: messagesRoutes },
    { path: "/api/users", handler: userRoutes}

];

export default function initRoutes(app) {
    routes.forEach((route) => app.use(route.path, route.handler));
}