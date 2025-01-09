package com.example.voting;  
  
import org.web3j.protocol.Web3j;  
import org.web3j.protocol.core.methods.response.EthGasPrice;  
import org.web3j.protocol.http.HttpService;  
import org.web3j.tx.gas.ContractGasProvider;  
import org.web3j.tx.gas.DefaultGasProvider;  
  
import java.math.BigDecimal;  
import java.math.BigInteger;  
import java.util.concurrent.ExecutionException;  
  
public class VotingDApp {  
    private static final String RPC_URL = "http://127.0.0.1:7545";  
    private static final String CONTRACT_ADDRESS = "your_contract_address";  
    private static Web3j web3j;  

    public void castVote(int candidateId) throws ExecutionException, InterruptedException {  
        contract.vote(BigInteger.valueOf(candidateId)).send();  
        System.out.println("Vote cast for candidate ID: " + candidateId);  
    }
  
    public static void main(String[] args) throws Exception {  
        web3j = Web3j.build(new HttpService(RPC_URL));  
        ContractGasProvider gasProvider = new DefaultGasProvider();  
        Voting contract = Voting.load(CONTRACT_ADDRESS, web3j, gasProvider);  
  
        // Example: Fetch candidates  
        for (int i = 1; i <= contract.candidatesCount().send().intValue(); i++) {  
            String name = contract.candidates(i).send().getName();  
            System.out.println("Candidate ID: " + i + ", Name: " + name);  
        }  
    }  
}