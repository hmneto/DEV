FROM mcr.microsoft.com/dotnet/sdk:5.0
WORKDIR /app
COPY ./ .
WORKDIR /app
RUN dotnet publish -c Release
EXPOSE 5000