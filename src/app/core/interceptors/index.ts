import { loaderInterceptorInterceptor } from "./loaderInterceptor/loader-interceptor.interceptor";
import { ServerUnavailableInterceptor } from "./serverUnavailable-interceptor/server-unavailable-interceptor.interceptor";

export const httpInterceptorsProviders = [
    ServerUnavailableInterceptor,
    loaderInterceptorInterceptor
]