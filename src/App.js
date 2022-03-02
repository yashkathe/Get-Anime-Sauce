import classes from "./App.module.css";
import Parent from "./Components/Parent";
import Header from "./UI/Header";

const App = () => {
    return (
        <div className={classes.parent}>
            <Header />
            <Parent />
        </div>
    );
};

export default App;
