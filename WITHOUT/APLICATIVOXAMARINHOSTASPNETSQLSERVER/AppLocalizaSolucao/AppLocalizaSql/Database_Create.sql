CREATE DATABASE AppLocaliza;
USE AppLocaliza;
CREATE TABLE Tracking(
    id int IDENTITY(1,1),
    lat DECIMAL(12,10),
    long DECIMAL(12,10),
    dia_hora DateTimeOffset NOT NULL default SYSDATETIMEOFFSET(),
    CONSTRAINT PK_Tracking primary key (id) 
);





INSERT INTO Tracking (lat,long) VALUES (10.555555,50.666666);



