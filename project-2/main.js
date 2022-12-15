const apiKey = `6a3e2acb-6a27-4e6e-aa62-d1d6372a809b`;

let _data = [];
let formComplete = false;

const getCurrentLocationData = async () => {

	const result = await fetch(`https://api.airvisual.com/v2/nearest_city?key=${apiKey}`,
	{
		method: "GET",
		redirect: 'follow'
	}).catch(error => console.log('error', error));

	let data = await result.json();
  return data.data;
};

const loadCountries = async () => {
	const result = await fetch(`http://api.airvisual.com/v2/countries?key=${apiKey}`,
		{
			method: "GET",
			redirect: 'follow'
		})
		.then((response) => response.json())
		.then((responseJSON) => {
			return responseJSON.data;
		});
	
	const countriesDropDown = document.getElementById("countries");
	//loads result into countries drop down
	if (result.length) {
		result.map(({ country: country }) => {
			let option = document.createElement("option");

			option.setAttribute('value', country);

			let optionText = document.createTextNode(country);
			option.appendChild(optionText);

			countriesDropDown.appendChild(option);
		});
	};
	// loads state drop down on country select
	countriesDropDown.addEventListener("change", e => {
		loadStates(e.target.value);
	});
}

const loadStates = async (country) => {
	const result = await fetch(`http://api.airvisual.com/v2/states?country=${country}&key=${apiKey}`,
		{
			method: "GET",
			redirect: 'follow'	
		})
		.then((response) => response.json())
		.then((responseJSON) => {
			return responseJSON.data;
		})
		.catch(error => console.log('error', error));
	
	const statesDropDown = document.getElementById("states");
	statesDropDown.length = 1; //empties the state drop down list save the first child element
	document.getElementById("cities").length = 1; //empties the city drop down list save the first child element

	//loads result into states drop down
	if (result.length) {
		result.map(({ state: state }) => {
			let option = document.createElement("option");

			option.setAttribute('value', state);

			let optionText = document.createTextNode(state);
			option.appendChild(optionText);

			statesDropDown.appendChild(option);
		});
	};
	// loads city drop down on state select
	statesDropDown.addEventListener("change", e => {
		const countSel = document.getElementById("countries").value;
		loadCities(e.target.value, countSel);
	})
}

const loadCities = async (state, country) => {
	const result = await fetch(`http://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=${apiKey}`,
		{
			method: "GET",
			redirect: 'follow'
		})
		.then((response) => response.json())
		.then((responseJSON) => {
			return responseJSON.data;
		})
		.catch(error => console.log('error', error));
	
	const citiesDropDown = document.getElementById("cities");
	citiesDropDown.length = 1;
	//loads result into city drop down
	if (result.length) {
		result.map(({ city: city }) => {
			let option = document.createElement("option");

			option.setAttribute('value', city);

			let optionText = document.createTextNode(city);
			option.appendChild(optionText);

			citiesDropDown.appendChild(option);
		});
	};
	//
	citiesDropDown.addEventListener("change", e => {
		formComplete = true;
	})
}

const specificCityData = async (city, state, country) => {

	const result = await fetch(`https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${apiKey}`,
	{
		method: "GET",
		redirect: 'follow'
	}).catch(error => console.log('error', error));

	let data = await result.json();
  return data.data;
};

//default page view
const loadData = async () => {
	await loadCountries();
	_data = await getCurrentLocationData();
	await renderData();
}

const renderData = async () => {
	let source = _data;

	const selectedCountry = document.getElementById("countries").value;
	const selectedState = document.getElementById("states").value;
	const selectedCity = document.getElementById("cities").value;

	if (formComplete) {
		source = await specificCityData(selectedCity, selectedState, selectedCountry);
	} else {
		// const warning = `<p>Please select location, or reset and try again!</p>`
		// document.getElementById("form").insertAdjacentHTML("beforeend", warning);
	}

	// building the dynamic html (Rendering the data)
	const card = document.getElementById(`weather`);
	const weather = source.current.weather;
	const pollution = source.current.pollution;

	const ws = (source.current.weather.ws * 3.6).toFixed(1);// converts wind speed from m/s to km/h
	let mainus = ""; // converts code of main pollutant into actual pollutant elements
	switch(pollution.mainus) {
		case "p2":
			mainus = "PM2.5"; //Particulate matter of size blow 2.5um
			break;
		case "p1":
			mainus = "PM10"; //Particulate matter of size blow 10um
			break;
		case "o3":
			mainus = "Ozone O3"; //Ozone O3
			break;
		case "n2":
			mainus = "NO2"; //Nitrogen Dioxide
			break;
		case "s2":
			mainus = "SO2"; // Sulphur Dioxide
			break;
		case "co":
			mainus = "CO"; // Carbon monoxide
			break;
		default:
			mainus = "No data";
	} 

	const html = `
		<table border="0">
			<tr>
				<th>Current Weather</th>
				<th></th>
				<th>Current Air Quality</th>
			</tr>
			<tr class="card-header">
				<td>${weather.tp}<span style='font-size:0.2em;'>&#8451;</span></td>
				<td></td>
				<td>${pollution.aqius}<span style='font-size:0.2em;'>AQI</span></td>
			</tr>
		</table>
		<ul>
			<li>Humidity ${weather.hu}&#37;</li>
			<li>Pressure ${weather.pr} hPa</li>
			<li>Wind Speed ${ws} km/h</li>
			<li>Main Pollutant ${mainus}</li>
		</ul>
		<p><small>Location: ${source.city}, ${source.state}, ${source.country}</small></p>
	`;

	card.innerHTML = html;
	
}

loadData();

onSubmit = () => {
	event.preventDefault();
	renderData();
};
onReset = () => { 
	formComplete = false;
	renderData();
};


