<%-- 
    Document   : mostrarDados
    Created on : 10/05/2018, 08:16:12
    Author     : 1421554
--%>



<%@page import="java.sql.*"%>
<%-- <%@page import="com.mysql.jdbc.Connection"%> 

--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <%
            out.println(request.getParameter("codigo"));
            out.println(request.getParameter("nome"));
            // response.sendRedirect("https://www.tutorialspoint.com/jsp/jsp_form_processing.htm");
        %>


        <%
            // Instalar Driver o mysql
            Connection conn = null;
            try {
                Class.forName("com.mysql.jdbc.Driver");
                conn = DriverManager.getConnection("jdbc:mysql://localhost/clientes", "root", "");
            } catch (Exception e) {
                out.println("erro: " + e);
            }

            //Buscar dados no Banco de Dados
            try {
                Statement stm = conn.createStatement();
                ResultSet resultado
                        = stm.executeQuery("Select * from clientes");

                while (resultado.next()) {
                    out.println("<br><br>");
                    out.println("Código:" + resultado.getString(1));
                    out.println("Nome:" + resultado.getString(2));

                }

            } catch (Exception e) {
                out.println("Erro" + e);
            }

        %>
    </body>
</html>



