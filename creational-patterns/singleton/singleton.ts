export default class Singleton {
	private static instance: Singleton;

	private constructor() {}

	/**
	 * The Singleton's constructor should always be private to prevent direct
	 * construction calls with the `new` operator.
	 */
	public static getInstance(): Singleton {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton();
		}
		return Singleton.instance;
	}

	// business logic
	public static executeQuery(): any {}
}
