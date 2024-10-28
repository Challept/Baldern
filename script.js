async function fetchInfo() {
    const name = document.getElementById("nameInput").value;
    if (!name) {
        alert("Var god ange ett namn.");
        return;
    }

    const agifyUrl = `https://api.agify.io?name=${name}`;
    const genderizeUrl = `https://api.genderize.io?name=${name}`;
    const nationalizeUrl = `https://api.nationalize.io?name=${name}`;

    try {
        const [ageRes, genderRes, nationalityRes] = await Promise.all([
            fetch(agifyUrl),
            fetch(genderizeUrl),
            fetch(nationalizeUrl)
        ]);

        const ageData = await ageRes.json();
        const genderData = await genderRes.json();
        const nationalityData = await nationalityRes.json();

        displayResult(name, ageData.age, genderData.gender, nationalityData.country);
    } catch (error) {
        document.getElementById("result").innerHTML = "Kunde inte hämta data.";
    }
}

function displayResult(name, age, gender, countries) {
    let countryNames = countries.map(country => country.country_id).join(", ");
    document.getElementById("result").innerHTML = `
        <h2>Resultat för ${name}</h2>
        <p><strong>Uppskattad ålder:</strong> ${age || "Ingen data"}</p>
        <p><strong>Kön:</strong> ${gender || "Ingen data"}</p>
        <p><strong>Nationalitet(er):</strong> ${countryNames || "Ingen data"}</p>
    `;
}
