<%-- 
    Document   : dados
    Created on : 17/05/2018, 18:22:11
    Author     : hmnet
--%>

<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <%
            String id = request.getParameter("id");
            String nome = request.getParameter("nome");
            String acao = request.getParameter("acao");
            //out.print(id + "<br>");
            //out.print(nome + "<br>");
            //out.print(acao + "<br>");
            out.print("<a href='http://localhost:8080/WebApplication1/'>voltar</a><br>");
            try {
                Class.forName("com.mysql.jdbc.Driver");
                Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/teste", "root", "");
                Statement smt = conn.createStatement();
                if (acao.equals("1")) {
                    String sql = "insert into pessoas (nome) values ('" + nome + "')";
                    smt.execute(sql);
                }else if(acao.equals("2")){
                    String sql = "delete from pessoas where id="+id;
                    smt.execute(sql);
                }else if(acao.equals("3")){
                    String sql = "update pessoas set nome='"+nome+"' where id="+id;
                    smt.execute(sql);
                }else if(acao.equals("4")){
                    String sql = "select * from pessoas";
                    ResultSet resultado = smt.executeQuery(sql);
                    while(resultado.next()){
                        out.print("id: "+resultado.getString("id")+" ");
                        out.print("nome: "+resultado.getString("nome"));
                        out.print("<hr><br>");
                    }
                }

            } catch (Exception e) {
                out.print(e);
            }
        %>
    </body>
</html>
