export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg","images/logodana-dark.png","images/logodana-light.png","images/profile.webp","projects/ai-chat-assistant.md","projects/data-analytics-dashboard.md","projects/ecommerce-platform.md","projects/face-recognition-attendance.md","projects/mobile-task-manager.md","projects/object-detection-system.md"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".webp":"image/webp",".md":"text/markdown"},
	_: {
		client: {start:"_app/immutable/entry/start.CcILVb8F.js",app:"_app/immutable/entry/app.B_prnCNx.js",imports:["_app/immutable/entry/start.CcILVb8F.js","_app/immutable/chunks/Z06dMItG.js","_app/immutable/chunks/y1xvqwpx.js","_app/immutable/entry/app.B_prnCNx.js","_app/immutable/chunks/y1xvqwpx.js","_app/immutable/chunks/CM9EVAoq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/portfolio",
				pattern: /^\/portfolio\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/portfolio/[slug]",
				pattern: /^\/portfolio\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
