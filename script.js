function findPattern() {
    let dna = document.getElementById("dna").value.toUpperCase();
    let pattern = document.getElementById("pattern").value.toUpperCase();
    let result = "";

    if (dna === "" || pattern === "") {
        document.getElementById("result").innerText = "⚠ Please enter both fields!";
        return;
    }

    let found = false;

    for (let i = 0; i <= dna.length - pattern.length; i++) {
        let match = true;

        for (let j = 0; j < pattern.length; j++) {
            if (dna[i + j] !== pattern[j]) {
                match = false;
                break;
            }
        }

        if (match) {
            found = true;
            result += `Pattern found at index ${i}<br>`;
        }
    }

    if (!found) {
        result = "❌ No match found";
    }

    document.getElementById("result").innerHTML = result;
}