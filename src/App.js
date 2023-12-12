import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoute } from '~/routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoute.map((item, index) => {
                        const Layout = item.layout;
                        const Page = item.component;
                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
