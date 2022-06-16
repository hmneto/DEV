USE MASTER
GO

CREATE DATABASE [iot]
GO

USE [iot]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[sensor](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[createdAt] [datetime] NOT NULL,
	[step] [bigint] NOT NULL,
 CONSTRAINT [PK_sensor] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[sensor] ADD  CONSTRAINT [DF_sensor_createdAt]  DEFAULT (getdate()) FOR [createdAt]
GO


