<%-- 
    Document   : mostrardados
    Created on : 10/05/2018, 08:15:54
    Author     : rolfi.gomes
--%>

<%@page import="java.sql.Connection"%>
<%@page import="java.sql.*"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <a href="http://localhost:8080/PRJ_WEB_CRUD_clientes/">Voltar</a>
        <%

            String codigo = request.getParameter("codigo");
            String nome = request.getParameter("nome");
            String acao = request.getParameter("acao");

            out.println("Código:" + codigo);
            out.println("Nome:" + nome);
            out.println("Acao:" + acao);
        %>

        <%
            try {
                Class.forName("com.mysql.jdbc.Driver");
            } catch (ClassNotFoundException e) {
                out.println("Falha no registro<br>" + e);
            }

            //Instalar Driver do Mysql
            Connection conexao = null;
            try {
                Class.forName("com.mysql.jdbc.Driver");

                conexao
                        = DriverManager.getConnection(
                                "jdbc:mysql://localhost/clientes",
                                "root",
                                "");
            } catch (Exception e) {
                out.println("Erro:" + e);
            }

            // Buscar dados no Banco de Dados
            try {
                // inserir
                if (acao.equals("1")) {
                    Statement stm = conexao.createStatement();
                    String sql = "insert into clientes values (";
                    sql = sql + codigo + ",";
                    sql = sql + "'" + nome + "'" + ")";
                    stm.execute(sql);
                    // deletar
                } else if (acao.equals("2")) {
                    Statement stm = conexao.createStatement();
                    String sql = "delete from clientes where ";
                    sql = sql + "codigo=" + codigo;
                    stm.execute(sql);
                    //editar
                } else if (acao.equals("3")) {
                    Statement stm = conexao.createStatement();
                    String sql = "update clientes set nome='" + nome + "' where codigo=" + codigo;
                    stm.execute(sql);
                    //listar
                } else if (acao.equals("4")) {
                    Statement stm
                            = conexao.createStatement();
                    ResultSet resultado
                            = stm.executeQuery("Select * from clientes.clientes");

                    while (resultado.next()) {
                        out.println("<br><br>");
                        out.println("Código:" + resultado.getString(1));
                        out.println("Nome:" + resultado.getString(2));

                    }

                }

            } catch (Exception e) {
                out.println("Erro" + e);
            }


        %>

    </body>
</html>

