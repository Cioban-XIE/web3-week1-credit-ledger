const clients = [
  {
    id: "alice",
    name: "Alice Chen",
    credits: [
      { delta: 100, memo: "Week 1 onboarding credit" },
      { delta: -25, memo: "Workshop attendance debit" },
      { delta: 15, memo: "Peer review bonus" },
    ],
  },
  {
    id: "bob",
    name: "Bob Li",
    credits: [
      { delta: 40, memo: "Initial credit" },
      { delta: 20, memo: "Quiz completion bonus" },
    ],
  },
  {
    id: "carol",
    name: "Carol Wang",
    credits: [
      { delta: 75, memo: "Initial credit" },
      { delta: -10, memo: "Late submission debit" },
    ],
  },
];

function getBalance(client) {
  return client.credits.reduce((total, entry) => total + entry.delta, 0);
}

function formatSignedNumber(value) {
  return value > 0 ? `+${value}` : String(value);
}

console.log("Credit Ledger Clients");
console.log("=====================");

for (const client of clients) {
  console.log(`${client.id.padEnd(6)} ${client.name.padEnd(12)} balance: ${getBalance(client)}`);

  for (const entry of client.credits) {
    console.log(`  ${formatSignedNumber(entry.delta).padStart(4)}  ${entry.memo}`);
  }
}

const totalCredit = clients.reduce((total, client) => total + getBalance(client), 0);

console.log("=====================");
console.log(`Total outstanding credit: ${totalCredit}`);

