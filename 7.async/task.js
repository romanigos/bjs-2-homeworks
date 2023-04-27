class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error("Отсутствуют обязательные аргументы");
		}
		if (this.alarmCollection.some((alarm) => alarm.time === time)) {
			console.warn("Уже присутствует звонок на это же время");
		}
		this.alarmCollection.push({
			callback,
			time,
			canCall: true,
		})
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time !== time); // попробовать через splice
	}
	getCurrentFormattedTime() {
		let now = new Date();
		if (now.getMinutes() < 10) {
			return now.getHours() + ":" + '0' + now.getMinutes();
		}
		return now.getHours() + ":" + now.getMinutes();
	}

	start() {
		if (this.intervalId !== null) {
			return;
		}

		this.intervalId = setInterval(() => {
			let currentTime = this.getCurrentFormattedTime();
			this.alarmCollection.forEach((alarm) => {
				if (currentTime === alarm.time && alarm.canCall === true) {
					alarm.canCall = false;
					alarm.callback();
				}
			})
		}, 1000)

	}
	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach((alarm => {
			alarm.canCall = true;
		}))
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}

}