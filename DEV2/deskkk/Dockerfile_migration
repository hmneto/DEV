# FROM mcr.microsoft.com/dotnet/core/sdk:3.1
# WORKDIR /app
# COPY ./ .
# EXPOSE 5000



FROM mcr.microsoft.com/dotnet/core/sdk:3.1
WORKDIR /app
COPY ./ .
WORKDIR /app/Server
RUN dotnet publish -c Release
EXPOSE 5000






# FROM mcr.microsoft.com/dotnet/core/sdk:3.1
# WORKDIR /app
# COPY ./ .
# RUN dotnet tool install --global dotnet-ef --version 3.0.0
# ENV PATH="${PATH}:~/.dotnet/tools"
# WORKDIR /app/Server
# RUN dotnet add package Microsoft.EntityFrameworkCore.Design --version 2.2.1
# RUN dotnet add package Microsoft.EntityFrameworkCore.Tools --version 2.2.1
# RUN dotnet add package Pomelo.EntityFrameworkCore.MySql --version 2.1.0
# RUN dotnet publish -c Release
# # RUN dotnet ef dbcontext scaffold "Server=192.168.99.100,3306;Database=xxxxx;User Id=xxxx;Password=xxxx;" Pomelo.EntityFrameworkCore.MySql -o Model
# EXPOSE 5000


# dotnet publish -c Release



# RUN dotnet ef migrations add teste
# RUN dotnet ef database update
# RUN dotnet tool install --global dotnet-ef
# RUN dotnet tool install --global dotnet-ef --version 3.0.0
# RUN dotnet new -i Microsoft.Identity.Web.ProjectTemplates::1.6.0


# dotnet publish -c Release

# dotnet ef dbcontext scaffold "Server=db,3306;Database=xxxxx;User Id=xxxx;Password=xxxx;" Pomelo.EntityFrameworkCore.MySql -o Model
# dotnet ef dbcontext scaffold "Server=192.168.99.100,3306;Database=xxxxx;User Id=xxxx;Password=xxxx;" Pomelo.EntityFrameworkCore.MySql -o Model
