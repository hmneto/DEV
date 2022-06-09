/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package testeserver;

import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.nio.file.Files;
import java.nio.file.Paths;

/**
 *
 * @author hmeton
 */
public class Testeserver {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        ServerSocket server = null;
        Socket comunicacao = null;
        try{
            server = new ServerSocket(4000);
        }catch(Exception ex){
            
        }
        try{
        while(true){
           
                comunicacao = server.accept();
                PrintWriter w = new PrintWriter(comunicacao.getOutputStream());
                byte[] bytes = Files.readAllBytes(Paths.get("/home/hmeton/teste/rr.txt"));
                
                String s = new String(bytes);
                
                String[] v = s.split("\n");
                for(String one : v){
                    w.println(one);
                    
                }
                
                
                w.flush();
                w.close();
           
        }
        }catch(Exception es){
            es.printStackTrace();
        }
        
       
        
        
                
    }
    
}
