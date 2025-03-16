import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	server: {
		proxy: {
		  '/hpgsqkbodmxpwesvovie.supabase.co': {
			target: 'https://localhost',
			changeOrigin: true,
		  },
		},
	  },
	  plugins: [tailwindcss(), react()],
});
