BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[BookCategories] (
    [id] UNIQUEIDENTIFIER NOT NULL CONSTRAINT [DF__BookCategori__id__4E88ABD4] DEFAULT newid(),
    [name] NVARCHAR(500),
    [categoryId] UNIQUEIDENTIFIER,
    [fullText] NVARCHAR(500),
    [ISBN] NVARCHAR(500),
    [languageId] UNIQUEIDENTIFIER,
    [UDC] UNIQUEIDENTIFIER,
    [author] NVARCHAR(500),
    [title] NVARCHAR(500),
    [edition] INT,
    [pulishingPlace] NVARCHAR(500),
    [publisher] NVARCHAR(500),
    [pulishingYear] INT,
    [numberPage] INT,
    [size] NVARCHAR(500),
    [coAuthor] NVARCHAR(500),
    [useDate] DATETIME,
    [desc] NVARCHAR(500),
    [orderNumber] INT,
    [createAt] DATETIME CONSTRAINT [DF__BookCateg__creat__4F7CD00D] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME,
    [isEnable] BIT NOT NULL CONSTRAINT [DF__BookCateg__isEna__5070F446] DEFAULT 1,
    [createBy] UNIQUEIDENTIFIER,
    [lastUpdateBy] UNIQUEIDENTIFIER,
    CONSTRAINT [PK_BookCategories] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Books] (
    [id] UNIQUEIDENTIFIER NOT NULL CONSTRAINT [DF__Books__id__5441852A] DEFAULT newid(),
    [bookCategoryId] UNIQUEIDENTIFIER,
    [status] BIT NOT NULL CONSTRAINT [DF__Books__status__5535A963] DEFAULT 1,
    [barCode] NVARCHAR(500),
    [locationId] UNIQUEIDENTIFIER,
    [eId] NVARCHAR(20),
    [warehouseType] NCHAR(10),
    [orgId] UNIQUEIDENTIFIER,
    [orderNumber] INT,
    [createAt] DATETIME CONSTRAINT [DF__Books__createAt__5629CD9C] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME,
    [isEnable] BIT NOT NULL CONSTRAINT [DF__Books__isEnable__571DF1D5] DEFAULT 1,
    [createBy] UNIQUEIDENTIFIER,
    [lastUpdateBy] UNIQUEIDENTIFIER,
    CONSTRAINT [PK_Books] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[GeneralTypes] (
    [id] UNIQUEIDENTIFIER NOT NULL CONSTRAINT [DF__GeneralTypes__id__778AC167] DEFAULT newid(),
    [code] NVARCHAR(255),
    [name] NVARCHAR(500),
    [shortName] NVARCHAR(255),
    [desc] NVARCHAR(255),
    [scope] NVARCHAR(255) NOT NULL,
    [business] NVARCHAR(255),
    [parentId] UNIQUEIDENTIFIER,
    [createAt] DATETIME CONSTRAINT [DF__GeneralTy__creat__787EE5A0] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME,
    [isEnable] BIT NOT NULL CONSTRAINT [DF__GeneralTy__isEna__797309D9] DEFAULT 1,
    [createBy] UNIQUEIDENTIFIER,
    [lastUpdateBy] UNIQUEIDENTIFIER,
    CONSTRAINT [PK_GeneralTypes] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Locations] (
    [id] UNIQUEIDENTIFIER NOT NULL CONSTRAINT [DF__Locations__id__7D439ABD] DEFAULT newid(),
    [parentId] UNIQUEIDENTIFIER,
    [name] NVARCHAR(500),
    [fullName] NVARCHAR(255),
    [order] INT,
    [desc] NVARCHAR(500),
    [isEnable] BIT NOT NULL CONSTRAINT [DF__Locations__isEna__7E37BEF6] DEFAULT 1,
    [createAt] DATETIME CONSTRAINT [DF__Locations__creat__7F2BE32F] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME,
    [createBy] UNIQUEIDENTIFIER,
    [lastUpdateBy] UNIQUEIDENTIFIER,
    CONSTRAINT [PK_Locations] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[OrderDetail] (
    [id] UNIQUEIDENTIFIER NOT NULL CONSTRAINT [DF__OrderDetail__id__5FB337D6] DEFAULT newid(),
    [orderId] UNIQUEIDENTIFIER,
    [bookId] UNIQUEIDENTIFIER,
    [createDate] DATETIME,
    [dueDate] DATETIME,
    [renewDate] DATETIME,
    [isCheckRenew] BIT,
    [returnDate] DATETIME,
    [isCheck] BIT,
    [createAt] DATETIME CONSTRAINT [DF__OrderDeta__creat__60A75C0F] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME,
    [isEnable] BIT NOT NULL CONSTRAINT [DF__OrderDeta__isEna__619B8048] DEFAULT 1,
    [createBy] UNIQUEIDENTIFIER,
    [lastUpdateBy] UNIQUEIDENTIFIER,
    CONSTRAINT [PK_OrderDetail] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Orders] (
    [id] UNIQUEIDENTIFIER NOT NULL CONSTRAINT [DF__Orders__id__59FA5E80] DEFAULT newid(),
    [creatorId] UNIQUEIDENTIFIER,
    [checkById] UNIQUEIDENTIFIER,
    [status] BIT NOT NULL CONSTRAINT [DF__Orders__status__5AEE82B9] DEFAULT 1,
    [createAt] DATETIME CONSTRAINT [DF__Orders__createAt__5BE2A6F2] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME,
    [isEnable] BIT NOT NULL CONSTRAINT [DF__Orders__isEnable__5CD6CB2B] DEFAULT 1,
    [createBy] UNIQUEIDENTIFIER,
    [lastUpdateBy] UNIQUEIDENTIFIER,
    CONSTRAINT [PK_Orders] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Properties] (
    [id] UNIQUEIDENTIFIER NOT NULL CONSTRAINT [DF__Properties__id__6477ECF3] DEFAULT newid(),
    [name] NVARCHAR(500),
    [text] NVARCHAR(500),
    [index] INT,
    [type] NVARCHAR(500),
    [unit] NVARCHAR(500),
    [isRequired] BIT,
    [conditions] NVARCHAR(500),
    [createAt] DATETIME CONSTRAINT [DF__Propertie__creat__656C112C] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME,
    [isEnable] BIT NOT NULL CONSTRAINT [DF__Propertie__isEna__66603565] DEFAULT 1,
    [createBy] UNIQUEIDENTIFIER,
    [lastUpdateBy] UNIQUEIDENTIFIER,
    CONSTRAINT [PK_Properties] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Publishers] (
    [id] UNIQUEIDENTIFIER NOT NULL CONSTRAINT [DF__Publishers__id__72C60C4A] DEFAULT newid(),
    [name] NVARCHAR(500),
    [location] NVARCHAR(500),
    [phoneNumber] NVARCHAR(500),
    [createAt] DATETIME CONSTRAINT [DF__Publisher__creat__73BA3083] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME,
    [isEnable] BIT NOT NULL CONSTRAINT [DF__Publisher__isEna__74AE54BC] DEFAULT 1,
    [createBy] UNIQUEIDENTIFIER,
    [lastUpdateBy] UNIQUEIDENTIFIER,
    CONSTRAINT [PK_Publishers] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Roles] (
    [id] UNIQUEIDENTIFIER NOT NULL CONSTRAINT [DF__Roles__id__693CA210] DEFAULT newid(),
    [roleName] NVARCHAR(500),
    [desc] NVARCHAR(500),
    [createAt] DATETIME CONSTRAINT [DF__Roles__createAt__6A30C649] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME,
    [isEnable] BIT NOT NULL CONSTRAINT [DF__Roles__isEnable__6B24EA82] DEFAULT 1,
    [createBy] UNIQUEIDENTIFIER,
    [lastUpdateBy] UNIQUEIDENTIFIER,
    CONSTRAINT [PK_Roles] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[UserRole] (
    [id] UNIQUEIDENTIFIER NOT NULL CONSTRAINT [DF__UserRole__id__6E01572D] DEFAULT newid(),
    [userId] UNIQUEIDENTIFIER,
    [roleId] UNIQUEIDENTIFIER,
    [createAt] DATETIME CONSTRAINT [DF__UserRole__create__6EF57B66] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME,
    [isEnable] BIT NOT NULL CONSTRAINT [DF__UserRole__isEnab__6FE99F9F] DEFAULT 1,
    [createBy] UNIQUEIDENTIFIER,
    [lastUpdateBy] UNIQUEIDENTIFIER,
    CONSTRAINT [PK_UserRole] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Users] (
    [id] UNIQUEIDENTIFIER NOT NULL CONSTRAINT [DF__Users__id__49C3F6B7] DEFAULT newid(),
    [idTTTM] INT,
    [eQN] NVARCHAR(20),
    [username] NVARCHAR(20),
    [password] NVARCHAR(50),
    [cardNumber] NVARCHAR(50),
    [cardIssueDate] DATETIME,
    [cardExpiryDate] DATETIME,
    [codeBar] NVARCHAR(50),
    [checkById] UNIQUEIDENTIFIER,
    [createAt] DATETIME CONSTRAINT [DF__Users__createAt__4AB81AF0] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME,
    [isEnable] BIT NOT NULL CONSTRAINT [DF__Users__isEnable__4BAC3F29] DEFAULT 1,
    [createBy] UNIQUEIDENTIFIER,
    [lastUpdateBy] UNIQUEIDENTIFIER,
    CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[BookCategories] ADD CONSTRAINT [FK_BookCategories_category] FOREIGN KEY ([categoryId]) REFERENCES [dbo].[BookCategories]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[BookCategories] ADD CONSTRAINT [FK_BookCategories_CreateBy] FOREIGN KEY ([createBy]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[BookCategories] ADD CONSTRAINT [FK_BookCategories_language] FOREIGN KEY ([languageId]) REFERENCES [dbo].[GeneralTypes]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[BookCategories] ADD CONSTRAINT [FK_BookCategories_LastUpdateBy] FOREIGN KEY ([lastUpdateBy]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[BookCategories] ADD CONSTRAINT [FK_BookCategories_UDC] FOREIGN KEY ([UDC]) REFERENCES [dbo].[GeneralTypes]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Books] ADD CONSTRAINT [FK_Books_bookCategory] FOREIGN KEY ([bookCategoryId]) REFERENCES [dbo].[BookCategories]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Books] ADD CONSTRAINT [FK_Books_CreateBy] FOREIGN KEY ([createBy]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Books] ADD CONSTRAINT [FK_Books_LastUpdateBy] FOREIGN KEY ([lastUpdateBy]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[GeneralTypes] ADD CONSTRAINT [FK_GeneralTypes_CreateBy] FOREIGN KEY ([createBy]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[GeneralTypes] ADD CONSTRAINT [FK_GeneralTypes_LastUpdateBy] FOREIGN KEY ([lastUpdateBy]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[GeneralTypes] ADD CONSTRAINT [FK_GeneralTypes_parent] FOREIGN KEY ([parentId]) REFERENCES [dbo].[GeneralTypes]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Locations] ADD CONSTRAINT [FK_Locations_CreateBy] FOREIGN KEY ([createBy]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Locations] ADD CONSTRAINT [FK_Locations_LastUpdateBy] FOREIGN KEY ([lastUpdateBy]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[OrderDetail] ADD CONSTRAINT [FK_OrderDetail_book] FOREIGN KEY ([bookId]) REFERENCES [dbo].[Books]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[OrderDetail] ADD CONSTRAINT [FK_OrderDetail_CreateBy] FOREIGN KEY ([createBy]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[OrderDetail] ADD CONSTRAINT [FK_OrderDetail_LastUpdateBy] FOREIGN KEY ([lastUpdateBy]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[OrderDetail] ADD CONSTRAINT [FK_OrderDetail_order] FOREIGN KEY ([orderId]) REFERENCES [dbo].[Orders]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Orders] ADD CONSTRAINT [FK_Orders_checkBy] FOREIGN KEY ([checkById]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Orders] ADD CONSTRAINT [FK_Orders_CreateBy] FOREIGN KEY ([createBy]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Orders] ADD CONSTRAINT [FK_Orders_creator] FOREIGN KEY ([creatorId]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Orders] ADD CONSTRAINT [FK_Orders_LastUpdateBy] FOREIGN KEY ([lastUpdateBy]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Properties] ADD CONSTRAINT [FK_Properties_CreateBy] FOREIGN KEY ([createBy]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Properties] ADD CONSTRAINT [FK_Properties_LastUpdateBy] FOREIGN KEY ([lastUpdateBy]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Publishers] ADD CONSTRAINT [FK_Publishers_CreateBy] FOREIGN KEY ([createBy]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Publishers] ADD CONSTRAINT [FK_Publishers_LastUpdateBy] FOREIGN KEY ([lastUpdateBy]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Roles] ADD CONSTRAINT [FK_Roles_CreateBy] FOREIGN KEY ([createBy]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Roles] ADD CONSTRAINT [FK_Roles_LastUpdateBy] FOREIGN KEY ([lastUpdateBy]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[UserRole] ADD CONSTRAINT [FK_UserRole_CreateBy] FOREIGN KEY ([createBy]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[UserRole] ADD CONSTRAINT [FK_UserRole_LastUpdateBy] FOREIGN KEY ([lastUpdateBy]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[UserRole] ADD CONSTRAINT [FK_UserRole_role] FOREIGN KEY ([roleId]) REFERENCES [dbo].[Roles]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[UserRole] ADD CONSTRAINT [FK_UserRole_user] FOREIGN KEY ([userId]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Users] ADD CONSTRAINT [FK_Users_CreateBy] FOREIGN KEY ([createBy]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Users] ADD CONSTRAINT [FK_Users_LastUpdateBy] FOREIGN KEY ([lastUpdateBy]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
