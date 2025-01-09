let web3;  
window.addEventListener('load', async () => {  
    // Check if Web3 is injected  
    if (window.ethereum) {  
        web3 = new Web3(window.ethereum);  
        await window.ethereum.enable();  
    } else {  
        console.warn('Please install Metamask!');  
    }  
    loadCandidates();  
});  
  
async function loadCandidates() {  
    const contractAddress = 'your_contract_address';  
    const votingContract = new web3.eth.Contract(abi, contractAddress);  
    const candidatesCount = await votingContract.methods.candidatesCount().call();  
    const candidatesDiv = document.getElementById('candidates');  
    for (let i = 1; i <= candidatesCount; i++) {  
        const candidate = await votingContract.methods.candidates(i).call();  
        candidatesDiv.innerHTML += `<p>${candidate.name} (Votes: ${candidate.voteCount})</p>`;  
    }  
}  
  
document.getElementById('voteBtn').onclick = async () => {  
    const candidateId = document.getElementById('candidateId').value;  
    const accounts = await web3.eth.getAccounts();  
    const votingContract = new web3.eth.Contract(abi, 'your_contract_address');  
    await votingContract.methods.vote(candidateId).send({ from: accounts[0] });  
    loadCandidates();  
};