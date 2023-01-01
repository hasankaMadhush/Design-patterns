import Singleton from "./singleton";

function Main() {
	const singleton1 = Singleton.getInstance();
	const singleton2 = Singleton.getInstance();

	if (singleton1 === singleton2) {
		console.log("Singleton Worked, both variables contain same instance");
	} else {
		console.log("Singleton Failed, both variables contain different instance");
	}
}

Main();
