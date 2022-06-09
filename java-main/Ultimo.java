/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ultimo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import javax.swing.JOptionPane;



/**
 *
 * @author hmeton
 */
public class Ultimo {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws Exception{
        // TODO code application logic here
        
        Connection conn = DriverManager.getConnection("JDBC:sqlite:/home/hmeton/ultimo.sqlite");
        String sql = "CREATE  TABLE  IF NOT EXISTS \"main\".\"tablee\" (\"id\" INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL , \"nome\" VARCHAR, \"idade\" INTEGER)";
        PreparedStatement comunicacao = conn.prepareStatement(sql);
        comunicacao.execute();
        
        String insert = "INSERT INTO tablee (nome,idade) VALUES(?,?)";
        comunicacao = conn.prepareStatement(insert);
        comunicacao.setString(1, JOptionPane.showInputDialog("Nome"));
        comunicacao.setInt(2, Integer.parseInt(JOptionPane.showInputDialog("Idade")));
        comunicacao.execute();
        
        String resultadoResult = "SELECT * FROM tablee";
        comunicacao = conn.prepareStatement(resultadoResult);
        ResultSet resultado = comunicacao.executeQuery();
        
        while(resultado.next()){
            JOptionPane.showMessageDialog(null, resultado.getString("nome"));
            JOptionPane.showMessageDialog(null, resultado.getString("idade"));
        }
    }
    
}
