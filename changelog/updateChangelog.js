// updateChangelog.js
const fs = require('fs');
const { execSync } = require('child_process');

// Ejecuta el comando para obtener la última información del commit
const lastCommitInfo = execSync('git log -1 --pretty=format:"%h %s"').toString().trim();
const [hash, ...message] = lastCommitInfo.split(' ');

// Lee el changelog actual
const changelog = JSON.parse(fs.readFileSync('changelog.json', 'utf8'));
const newEntry = {
    date: new Date().toISOString().split('T')[0],
    changes: message.join(' ')
};

// Añade la nueva entrada al principio del changelog
changelog.unshift(newEntry);

// Guarda el changelog actualizado
fs.writeFileSync('changelog.json', JSON.stringify(changelog, null, 2), 'utf8');
