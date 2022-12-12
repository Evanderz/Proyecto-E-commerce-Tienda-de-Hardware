const productos = [
    { id: 1, categoria: "Motherboard", name: "Mother ASUS PRIME X570-P AM4", stock: 20, detail: "sdsdd", price:25000 ,imagen:<img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_14215_Mother_ASUS_PRIME_X570-P_AM4_PCIe_Gen4_Dual_M.2_49e0b283-grn.jpg"></img> },
    { id: 2, categoria: "Motherboard", name: "Mother Asrock X670E Steel Legend AM5", stock: 15, detail: "sdsdd", price:45000 , imagen: <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_34460_Mother_Asrock_X670E_Steel_Legend_AM5_75fc36a9-grn.jpg"></img>  },
    { id: 3, categoria: "Microprocesador", name: "AMD Ryzen 5 7600X 5.3GHz Turbo AM5", stock: 11, detail: "sdsdd", price:75000 , imagen: <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_34349_Procesador_AMD_Ryzen_5_7600X_5.3GHz_Turbo_AM5_-_No_incluye_Cooler_-_C_VIDEO_cf0124c7-grn.jpg"></img>   },
    { id: 4, categoria: "Microprocesador", name: "AMD Ryzen 9 7950X 5.7GHz AM5", stock: 23, detail: "sdsdd", price:200000 , imagen: <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_34443_Procesador_AMD_Ryzen_9_7950X_5.7GHz_AM5_-_No_incluye_Cooler_-_C_Video_88fdefec-grn.jpg"></img>   },
    { id: 5, categoria: "Microprocesador", name: "Intel i7 12700 S1700 12th Gen", stock: 9, detail: "sdsdd", price:85000 , imagen: <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_29140_Procesador_Intel_Core_i7_12700K_5.0GHz_Turbo_Socket_1700_4319ac0c-grn.jpg"></img>   },
    { id: 6, categoria: "RAM", name: "Kingston DDR4 8GB 3600MHz Fury Beast RGB", stock: 11, detail: "sdsdd", price:16000 , imagen: <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32119_Memoria_Kingston_DDR4_8GB_3600MHz_Fury_Beast_RGB_04dfe162-grn.jpg"></img>   },
    { id: 7, categoria: "RAM", name: "Adata DDR4 8GB 3200MHz XPG Spectrix D60G RGB Titanium", stock: 15, detail: "sdsdd", price:13000 , imagen: <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_28925_Memoria_Adata_DDR4_8GB_3200MHz_XPG_Spectrix_D60G_RGB_Titanium_1038b5fc-grn.jpg"></img>   },
    { id: 8, categoria: "RAM", name: "GeiL DDR4 16GB 3000MHz Super Luce RGB Black", stock: 20,detail: "sdsdd", price:35000 , imagen: <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17125_Memoria_GeiL_DDR4_16GB_3000MHz_Super_Luce_RGB_Black_981aafa9-grn.jpg"></img>   },
    { id: 9, categoria: "RAM", name: "Kingston DDR4 16GB 3200Mhz Fury Beast RGB", stock: 11, detail: "sdsdd", price:37000 , imagen: <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_34067_Memoria_Kingston_DDR4_16GB_3200Mhz_Fury_Beast_RGB_CL16__04dfe162-grn.jpg"></img>   },
    { id: 10, categoria: "RAM", name: "Corsair DDR4 16GB (2x8GB) 3200MHz Vengeance RGB PRO TUF Gaming", stock: 5, detail: "sdsdd", price:40000 , imagen: <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22497_Memoria_Corsair_DDR4_16GB__2x8GB__3200MHz_Vengeance_RGB_PRO_TUF_Gaming_cac16eab-grn.jpg"></img>   },
    { id: 11, categoria: "Almacenamiento", name: "SSD M.2 Crucial 500GB P3 3500MB/s NVMe", stock: 19, detail: "sdsdd", price:15000, imagen: <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_34872_Disco_Solido_SSD_M.2_Crucial_500GB_P3_3500MB_s_NVMe_PCI-E_x4_87fba598-grn.jpg"></img>   },
    { id: 12, categoria: "Almacenamiento", name: "SSD M.2 WD 240GB GREEN 545MB/s", stock: 13, detail: "sdsdd", price:6000 , imagen: <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23427_Disco_Solido_SSD_M.2_WD_240GB_GREEN_545MB_s_36736043-grn.jpg"></img>   },
    { id: 13, categoria: "Almacenamiento", name: "Disco Rígido WD 1TB BLUE 64MB SATA 6.0GB/s", stock: 9, detail: "sdsdd", price:10000 , imagen: <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_9018_Disco_R__gido_WD_1TB_BLUE_64MB_SATA_6.0GB_s__ca74d162-grn.jpg"></img>   },
    { id: 14, categoria: "Almacenamiento", name: "Disco Rigido WD 6TB Purple 5.6K RPM 256MB", stock: 2, detail: "sdsdd", price:37000 , imagen: <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26764_Disco_Rigido_WD_6TB_Purple_5.6K_RPM_256MB_29fdc27d-grn.jpg"></img>   },
    { id: 15, categoria: "Almacenamiento", name: "Disco Rígido Toshiba 8TB N300 NAS 7200rpm 256MB", stock: 18, detail: "sdsdd", price:41000 , imagen: <img src=""></img>  },
    { id: 15, categoria: "Placa_de_video", name: "Zotac GeForce GTX 1660 6GB GDDR5 Dual Fan", stock: 10, detail: "sdsdd", price:95000 , imagen: <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_34999_Placa_de_Video_Zotac_GeForce_GTX_1660_6GB_GDDR5_Dual_Fan_fcf6db06-grn.jpg"></img>  },
    { id: 15, categoria: "Placa_de_Video", name: "Zotac GeForce RTX 3070 Ti 8GB GDDR6X Trinity", stock: 6, detail: "sdsdd", price:191000 , imagen: <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_35001_Placa_de_Video_Zotac_GeForce_RTX_3070_Ti_8GB_GDDR6X_Trinity_6d89820f-grn.jpg"></img>  },
    { id: 15, categoria: "Placa_de_Video", name: "XFX Radeon RX 570 8GB DDR5 RS XXX Edition", stock: 14, detail: "sdsdd", price:63500 , imagen: <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_19164_Placa_de_Video_XFX_Radeon_RX_570_8GB_DDR5_RS_XXX_Edition_951516f2-grn.jpg"></img>  },
    { id: 15, categoria: "Gabinete", name: "Thermaltake H100 Tempered Glass Black", stock: 9, detail: "sdsdd", price:21800 , imagen: <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_15426_Gabinete_Thermaltake_H100_Tempered_Glass_Black_Sin_fuente_MTB_ATX_ec149686-grn.jpg"></img>  },
    { id: 15, categoria: "Gabinete", name: "Gabinete Cougar Panzer EVO RGB", stock: 3, detail: "sdsdd", price:65300 , imagen: <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21537_Gabinete_Cougar_Panzer_EVO_RGB_91c29e37-grn.jpg"></img>  },
    { id: 15, categoria: "Fuente", name: "ASUS ROG STRIX 750W 80 Plus Gold Full Modular 750G", stock: 7, detail: "sdsdd", price:39000 , imagen: <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33007_Fuente_ASUS_ROG_STRIX_750W_80_Plus_Gold_Full_Modular_750G_38c61d29-grn.jpg"></img>  },
    { id: 15, categoria: "Fuente", name: "Thermaltake 650W 80 Plus Bronze SMART BX1", stock: 23, detail: "sdsdd", price:17700 , imagen: <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_35309_Fuente_Thermaltake_650W_80_Plus_Bronze_SMART_BX1__06542a5f-grn.jpg"></img>  },
    { id: 15, categoria: "Refrigeracion", name: "Cooler CPU Thermaltake UX100 ARGB", stock: 11, detail: "sdsdd", price:4200 , imagen: <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33637_Cooler_CPU_Thermaltake_UX100_ARGB_12a77695-grn.jpg"></img>  },
    { id: 15, categoria: "Refrigreracion", name: "Cooler CPU Deepcool GAMMAXX 400XT FRGB", stock: 8, detail: "sdsdd", price:41000 , imagen: <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30228_Cooler_CPU_Deepcool_GAMMAXX_400XT_FRGB_5915c43b-grn.jpg"></img>  },
    { id: 15, categoria: "Refrigeracion", name: "ZOOMFLOW XT 240 Water Cooling ARGB", stock: 30, detail: "sdsdd", price:25200 , imagen: <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27621_Cooler_CPU_ID-Cooling_ZOOMFLOW_XT_240_Water_Cooling_ARGB_514cb7b8-grn.jpg"></img>  },
    { id: 15, categoria: "Monitores", name: "Monitor LG LED 19'' 19M38A-B VGA", stock: 13, detail: "sdsdd", price:387500 , imagen: <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_8683_Monitor_LG_LED_19___19M38A-B_VGA_4607eba4-grn.jpg"></img>  },
    { id: 15, categoria: "Monitores", name: "Monitor Hikvision 22'' DS-D5022QE-E VGA HDMI", stock: 13, detail: "sdsdd", price:41000 , imagen: <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33977_Monitor_Hikvision_22___DS-D5022QE-E_VGA_HDMI_18808596-grn.jpg"></img>  },

      
]

export {productos}