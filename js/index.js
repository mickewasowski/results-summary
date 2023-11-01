const data = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "../assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "../assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "../assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "../assets/images/icon-visual.svg"
    }
];

function appendChildren() {
  let summaryParent = document.getElementById('summary-content');
  let finalString = '';
  data.forEach(d => {
      const childNode = `
          <span id="${d.category}-span">
            <div>
              <img src="${d.icon}" alt="${d.category}"/>
              <p>${d.category}</p>
            </div>
              <p id="${d.category}-score"><strong>${d.score}</strong> / 100</p>
          </span>
      `
      finalString += childNode;
  });
  
  summaryParent.innerHTML = finalString;
}

appendChildren();