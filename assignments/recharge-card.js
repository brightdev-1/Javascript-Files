let cards = [], sn = 1;

const prefixes = { MTN: "*555*", Glo: "*777*", Airtel: "*322*", Etisalat: "*566*" };
const genPin = (network) => prefixes[network] + Math.floor(Math.random() * 1e11).toString().padStart(11, "0") + "#";

document.getElementById("generate-btn").onclick = () => code.value = genPin(networks.value);

document.getElementById("save-btn").onclick = () => {
    if (!code.value) return alert("Generate a pin first.");
    cards.push({ sn: sn++, network: networks.value, amount: amount.value, pin: code.value, status: "unused", created: new Date().toLocaleDateString(), used: "Not used yet" });
    render();
    code.value = "";
};

document.getElementById("recharge-btn").onclick = () => {
    const card = cards.find(c => c.pin === pinInput.value.trim());
    if (!card) return alert("Invalid pin.");
    if (card.status === "used") return alert("This pin has already been used.");
    alert(`Recharge successful! ${card.amount} added to your ${card.network} line.`);
    card.status = "used";
    card.used = new Date().toLocaleDateString();
    render();
    pinInput.value = "";
};

function render() {
    cardTableBody.innerHTML = cards.map(c => `
        <tr>
            <td>${c.sn}</td><td>${c.network}</td><td>${c.amount}</td><td>${c.pin}</td>
            <td>${c.status}</td><td>${c.created}</td><td>${c.used}</td>
            <td><button class="delete" onclick="cards=cards.filter(x=>x.sn!==${c.sn});render()">delete</button></td>
        </tr>`).join("");
}