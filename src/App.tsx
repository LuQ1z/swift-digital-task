import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import HistoryPage from "./routes/history/history.component";

function App() {
	const [searchHistory, setSearchHistory] = useState<string[]>([]);

	return (
		<QueryClientProvider client={queryClient}>
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route index element={<Home setSearchHistory={setSearchHistory} />} />
					<Route
						path="history"
						element={<HistoryPage searchHistory={searchHistory} />}
					/>
				</Route>
			</Routes>
		</QueryClientProvider>
	);
}

export default App;
