import java.sql.*;
//import com.mysql.jdbc.Driver;
import java.util.Scanner;

public class JavaBanco{
	public static Connection conexao;
	public static void main(String[] args)throws Exception{
		Scanner teclado = new Scanner(System.in);

		String chave;
		String texto="";
		conecta();
		
		while(!texto.equals("tenso")){
			/*System.out.println("Entre com a chave");
			chave = teclado.nextLine();
			*/
			System.out.println("Entre com o dado");
			texto = teclado.nextLine();
		
			
			try{
				executa("INSERT INTO `tabela` (`nome`) VALUES ('"+texto+"');");
		
			}catch (Exception ex){
				System.out.println("Dado nao inserido");
			}

		}

		listaBanco();

		desconecta();
	}


	public static void conecta(){

		//String driver = "com.mysql.jdbc.Driver";
		String url = "jdbc:mysql://localhost:3306/banco";
		String login = "root";
		String senha = "tenso123";

		/*try{
			Class.forName(driver);
			System.out.println("Driver encontrado");
			
			}catch (Exception ex){
				System.out.println("no foi possivel encontrar a classe");
			}*/

		try{
			conexao = DriverManager.getConnection(url, login, senha);
			System.out.println("conexao Bem Sucedida");
		}catch (Exception ex){
			System.out.println("nao conectado");
		}
	}


	public static void executa(String sql){
		try{
			Statement st = null;
			st = conexao.createStatement();
			st.executeUpdate(sql);
			System.out.println("Dado inserido");
		}catch (Exception ex){
			System.out.println("nao executa");
		}
	}


	public static void listaBanco(){
		try{
			Statement st = null;
			st = conexao.createStatement();
			ResultSet rs = st.executeQuery("SELECT * FROM tabela");
			while(rs.next()){
				System.out.println("Chave primaria "+rs.getString(1)+"    Nome " +rs.getString("nome"));
			}



		}catch(Exception ex){
			System.out.println("erro");
		}
		
	}

	


	public static void desconecta(){
		try{
			conexao.close();
			System.out.println("desconectado");
		}catch (Exception ex){
			System.out.println("");
		}
	}

}
