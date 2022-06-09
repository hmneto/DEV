<%-- 
    Document   : dados
    Created on : 17/05/2018, 08:45:19
    Author     : 1421554
--%>

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
            String cod = request.getParameter("cod");
            String endereco = request.getParameter("endereco");
            String bairro = request.getParameter("bairro");
            String cidade = request.getParameter("cidade");
            String estado = request.getParameter("estado");
            
            try{
                Class.forName("com.mysql.jdbc.Driver");
                Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/mydb","root","");
                Statement smt = conn.createStatement();
                String sql = "insert into COPS values("
                        + ""+cod+""
                        + ",'"+endereco+"'"
                        + ",'"+bairro+"'"
                        + ",'"+cidade+"'"
                        + ",'"+estado+"')";
                smt.execute(sql);
            }catch(Exception e){
                out.print(e);
            }
        %>   

    </body>
</html>
