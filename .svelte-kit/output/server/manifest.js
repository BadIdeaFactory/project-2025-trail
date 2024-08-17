export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","main.css"]),
	mimeTypes: {".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.BRYrMdMH.js","app":"_app/immutable/entry/app.CdPdz1H8.js","imports":["_app/immutable/entry/start.BRYrMdMH.js","_app/immutable/chunks/entry.CwvfODWh.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/entry/app.CdPdz1H8.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.BfU210Fn.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
