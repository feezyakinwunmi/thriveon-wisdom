// app/gallery/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ChevronLeft, ChevronRight, Image as ImageIcon, ChevronDown, Loader2 } from "lucide-react";

// Helper functions for Google Drive URLs
const getDirectImageUrl = (fileId: string) => {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`;
};

const getHighResImageUrl = (fileId: string) => {
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
};

const getDownloadUrl = (fileId: string) => {
  return `https://drive.google.com/uc?export=download&id=${fileId}`;
};

// ============================================
// SECTION 1: SPEAKERS (8 images)
// ============================================
const speakersImages = [
  { id: 1, fileId: "1iTABCJzaQSsW13Y_D_Ry114V-91yI9ur", title: "Speaker 1", description: "" },
  { id: 2, fileId: "1UqqHvC-Ekj7US9Hr6Ly3K-0_3e1sLWlL", title: "Speaker 2", description: "" },
  { id: 3, fileId: "1x0wfZ7s9tRSoWjZtGDAT1wF_k7NXmuC_", title: "Speaker 3", description: "" },
  { id: 4, fileId: "1N8HOoVIa_HBG276iCk60CL1EZ3m8dfO4", title: "Speaker 4", description: "" },
  { id: 5, fileId: "1UV3I5zThV_KEwNIxoQzeCCOWjTQ5KvAp", title: "Speaker 5", description: "" },
  { id: 6, fileId: "1t_JhGO90VVUN9YyGHhQ2YkBUk0ILkprn", title: "Speaker 6", description: "" },
  { id: 7, fileId: "1SgsuprTdtIHsknV85qRmpf7FJBAeC-UQ", title: "Speaker 7", description: "" },
  { id: 8, fileId: "1eL3KgC-Qr490D8k7SiNxL-Im4hCQYb2v", title: "Speaker 8", description: "" },
];

// ============================================
// SECTION 2: PHOTOGRAPHY BY ADE (48 images)
// ============================================
const adePhotographyImages = [
  { id: 1, fileId: "118YSQBabHJhQKfOPA3CEwiEGSfLg-_-b", title: "Photo 1", description: "" },
  { id: 2, fileId: "1FRy-F6LQX4E9t6NmmhQA-7W6wA1Y50P7", title: "Photo 2", description: "" },
  { id: 3, fileId: "1WEiISHO59vvDjY-nk1PleGGnjeFgEV29", title: "Photo 3", description: "" },
  { id: 4, fileId: "1EAuIAnpJZGGMKvwhmppRh0HZVwznb_5R", title: "Photo 4", description: "" },
  { id: 5, fileId: "1A4KbtnrjOJR3tbyEdZIugxYGRNCoQAYv", title: "Photo 5", description: "" },
  { id: 6, fileId: "1yWmNsJHhA1_FC3NqE-xaoUE5jJix5Wl8", title: "Photo 6", description: "" },
  { id: 7, fileId: "1zA8C_Dp14SY2k7z0tKMtgINhwzOy9HIm", title: "Photo 7", description: "" },
  { id: 8, fileId: "1z4efAIYsPAnhwnCHId91RwK3oPTImTiv", title: "Photo 8", description: "" },
  { id: 9, fileId: "1LHPrCVMf_1eCF1wXB94dHvw2oH0zV6gO", title: "Photo 9", description: "" },
  { id: 10, fileId: "1EGTWzcQC7e4KtJjBUyhuZCNsOOIoqVRg", title: "Photo 10", description: "" },
  { id: 11, fileId: "1L8g4FndX2oK_YM1hri8Rdj5ULS6mYxxl", title: "Photo 11", description: "" },
  { id: 12, fileId: "1b-kgifgm5VOmf2Yd24XRc2cmHeuMLbzP", title: "Photo 12", description: "" },
  { id: 13, fileId: "1dci7CJ1--m0HeShSIp1TiYzgWSUBhfRn", title: "Photo 13", description: "" },
  { id: 14, fileId: "1a9MruqPBq6SARufpIRJnu-Nqxf-8sC7U", title: "Photo 14", description: "" },
  { id: 15, fileId: "1b08haPNjBlbHxDlemUDIDp8JxI19agMs", title: "Photo 15", description: "" },
  { id: 16, fileId: "1oTxwCEEgx6trwnuxLsSKSrXXw1bgQigi", title: "Photo 16", description: "" },
  { id: 17, fileId: "11SoYhh2NRlbIJaA-7Xu_gMbe-XHQm7I1", title: "Photo 17", description: "" },
  { id: 18, fileId: "146iYx-hHvYme4Wp3AoBHDfeNqfhIlsdx", title: "Photo 18", description: "" },
  { id: 19, fileId: "1-KpApyCY-4SdQXjMYN91LYT6vLTjffCC", title: "Photo 19", description: "" },
  { id: 20, fileId: "1GtVTOiC1SqA48fZfMFwlnblRopkyJwqv", title: "Photo 20", description: "" },
  { id: 21, fileId: "1GnvsFC6RNrQISR0d5fJjwKj0O2RZqqZT", title: "Photo 21", description: "" },
  { id: 22, fileId: "1MN-DSHsa83lR5lo-GbeDmJaXgKvEr9XB", title: "Photo 22", description: "" },
  { id: 23, fileId: "1vBMUuPieCJ8lAXqJAHtlzfMmh7x3v0Li", title: "Photo 23", description: "" },
  { id: 24, fileId: "1lteyXvufBsP_pIuJOf8e0tWW6HdYMCla", title: "Photo 24", description: "" },
  { id: 25, fileId: "1k4U1elGslPTVpnm6B5vIZ_YPQyUteout", title: "Photo 25", description: "" },
  { id: 26, fileId: "1lK9SHAx4urSKlh2lUaG-jizg0YHzFG5o", title: "Photo 26", description: "" },
  { id: 27, fileId: "1I33Jsg2XoygzMbV2w4j2BRpc8PTP-WJj", title: "Photo 27", description: "" },
  { id: 28, fileId: "13PQG3UHKw3FBp1tULrHLt9dY3_nSkRj2", title: "Photo 28", description: "" },
  { id: 29, fileId: "1lBFWMH0mX2U9IXqMmN7hcHNbchm9A8cp", title: "Photo 29", description: "" },
  { id: 30, fileId: "1AKD1AgukvpK4BLRs9GzT5nybCOZJoeeL", title: "Photo 30", description: "" },
  { id: 31, fileId: "1sXiUw_B8fs3-Yi2aJbgeOOHlrZ3OfY2t", title: "Photo 31", description: "" },
  { id: 32, fileId: "1V_DGzDb1isjXn_6Zw_sEquwMNg2s4pqt", title: "Photo 32", description: "" },
  { id: 33, fileId: "12YAsr0RrjgMYhKe1PfPvxC73y3cljVzU", title: "Photo 33", description: "" },
  { id: 34, fileId: "1G8gowggg8XMz9hlscg5aQHUCzu8vCJH2", title: "Photo 34", description: "" },
  { id: 35, fileId: "1Jyn9reqNNhZpEPCbI27UkdpO6k4vavgG", title: "Photo 35", description: "" },
  { id: 36, fileId: "1NhzHqQgDb2pBSeIC8Z9AKk-m2f0Sa832", title: "Photo 36", description: "" },
  { id: 37, fileId: "1mpcN9fwguG5pPmY3CMsCYext6OhkHEdW", title: "Photo 37", description: "" },
  { id: 38, fileId: "1OLCAT8tBgzAZPO2sVX7uEpbhu1qLTd0C", title: "Photo 38", description: "" },
  { id: 39, fileId: "1Vf9neBw5zsCkXhKAHX9STvvi7657Zrz9", title: "Photo 39", description: "" },
  { id: 40, fileId: "1jMGojnXAnkhO3Q4gDSM-3oad-pgXg-aw", title: "Photo 40", description: "" },
  { id: 41, fileId: "16g6ZWhtpTSuRTodY-5N7ig8_FdwoF6og", title: "Photo 41", description: "" },
  { id: 42, fileId: "1weMPvssjqE2ckZcoE4E_INYET_BQM96c", title: "Photo 42", description: "" },
  { id: 43, fileId: "1ZmDCLwzAP5d7rVNqnfD6GyTr-NFRD9jD", title: "Photo 43", description: "" },
  { id: 44, fileId: "1As0C1k5WQEQ-_5-a3s8inZ_gJYhMfJCo", title: "Photo 44", description: "" },
  { id: 45, fileId: "1-c9vxOfa22trrBWx_0lCOmqFtV3uZLQc", title: "Photo 45", description: "" },
  { id: 46, fileId: "1prXgnlJ2X9zkXIGt69x-abI36ERpahcZ", title: "Photo 46", description: "" },
  { id: 47, fileId: "1w8U0FBYu4ngQ6q_Q2YrTFpc9lBl56OX-", title: "Photo 47", description: "" },
  { id: 48, fileId: "1WI3P-Eaaxosvx4i0H0kVNqF0McBX9OBo", title: "Photo 48", description: "" },
  { id: 49, fileId: "1vPKyd8a7vb0azDa3avJczYUNwEW72X9p", title: "Photo 49", description: "" },
  { id: 50, fileId: "1K0o91-FbCkdJ0998xxBLuiEQv1yThquw", title: "Photo 50", description: "" },
];

// ============================================
// SECTION 3: VIDEOGRAPHY (2 images)
// ============================================
const videographyImages = [
  { id: 1, fileId: "1aC3c2mBod704_vNGWVR-q0lT8Uud307E", title: "Video Coverage 1", description: "" },
  { id: 2, fileId: "1ON7s_kjqQmO-ZeKjNaZNRf9XNa8Zkm4P", title: "Video Coverage 2", description: "" },
];

// ============================================
// SECTION 4: PHOTOGRAPHY BY TOBI (141 images)
// ============================================
const tobiPhotographyImages = [
  { id: 1, fileId: "1aIFvmT42-8m012jU9NNQGvh_HCgPRxs3", title: "THRIVEON 1", description: "" },
  { id: 2, fileId: "1Xf8ufs1abAFeWPMnvT-3buNlLR1noWwo", title: "THRIVEON 2", description: "" },
  { id: 3, fileId: "1LCnugLr84e0-_bjQSOHdPNcjoIk44vLL", title: "THRIVEON 3", description: "" },
  { id: 4, fileId: "1K_s56tPaMqfG7IP6EUp1PeBaXIIbbuy4", title: "THRIVEON 4", description: "" },
  { id: 5, fileId: "1JhNBHSwm7t_mxlDHrzv2CGqio4k2oqtc", title: "THRIVEON 5", description: "" },
  { id: 6, fileId: "1JF6Xxdo7DzQYAb-mBoyo2rpYPb330waB", title: "THRIVEON 6", description: "" },
  { id: 7, fileId: "1IZVfvq8EBEx9glE1mzgVZf_8JM-rV3Db", title: "THRIVEON 7", description: "" },
  { id: 8, fileId: "1HvqMG4CVd581aBCNSYiYOcNLRDpDzg51", title: "THRIVEON 8", description: "" },
  { id: 9, fileId: "1HMcaVPfX5c6P5safK8NuLGlzG69KHtMq", title: "THRIVEON 9", description: "" },
  { id: 10, fileId: "1aIDky6LB90BMnFSxEvMHVWjO4rGA17Hn", title: "THRIVEON 10", description: "" },
  { id: 11, fileId: "1Uz6IY74Xqx32CqiiJoDZ1GOnUqqhtjZE", title: "THRIVEON 11", description: "" },
  { id: 12, fileId: "1UXN5psU0uviBpdk0GAaQw587BrV-4Wd7", title: "THRIVEON 12", description: "" },
  { id: 13, fileId: "1QmJibhbJPvWQjA8mW06M-OOKnaHg711N", title: "THRIVEON 13", description: "" },
  { id: 14, fileId: "1PA5r2uancaVbeYRr67QKQlh2ioWh9QM5", title: "THRIVEON 14", description: "" },
  { id: 15, fileId: "1XeANI2QQ40ZR3HBh14Ln2whHaBlxMnpL", title: "THRIVEON 15", description: "" },
  { id: 16, fileId: "1XGS13v5IT1qmO71hDUR32-va92NYw9H7", title: "THRIVEON 16", description: "" },
  { id: 17, fileId: "1MuC302fHe5d5g-_BbhxDiGRrRQEjZhNU", title: "THRIVEON 17", description: "" },
  { id: 18, fileId: "1MIZcauQ5zXTtV6GeL7wP8ajEh_HEOU3f", title: "THRIVEON 18", description: "" },
  { id: 19, fileId: "1LbQ3I5FG8AAo-GDlkQhcG9ltc046urC0", title: "THRIVEON 19", description: "" },
  { id: 20, fileId: "1LSk_0ZxnMnadq6IPOWVThyxOgyjf0Aae", title: "THRIVEON 20", description: "" },
  // Continue from 21-141...
];

// Continue adding remaining Tobi images (21-141)
// I'll add them in the next message since there's a character limit
// For now, let's create a function to generate them

// Function to generate Tobi images from the IDs you provided
const generateTobiImages = () => {
  const ids = [
    "1LSyzQqGRrZqCLco-yeP8pgVfdxO-awDa", "1LVMAfnivHogOXwb73tTjbqg4H0J3tNFG", "1LMpQc-rwHMsJuejef1E3OmfGHqBYPcuF",
    "1LH080QaIGvUHkIgH4xpV-bSLXlDMSLgj", "1KzU8kmoK9UT6U_TDwq1BOOQKSG7ZvJEW", "1LG8kVJOfOAOQEETB_0QdcmwzlrQnIQC_",
    "1L5OWOAQfhzYo6E4UXwW7eP5eokr08VC9", "1KzPyDoiD8LgkVta_DwjgdDgZCAqvPCvJ", "1KsCa2kB7ysfCvK6nDByfvk_pbwJfMsnE",
    "1KnUVeCn3ltYKXhc1WbyGS1CbUTFGMnGt", "1KiGxfPrlef_kkMYsh7gXyCiTeIMzWIYx", "1Ke1t6PM_8wVoA4tE7mD3W9KCsWDPPjV8",
    "1Ke-QRTcKNuEcTiw7Z9_cyCZJz5Zgw7KN", "1KcVzW8QoKunO1hj02On7CKagnf-HxOHc", "1KTE3j2idXWxrrbpIB-T003DxIgHzmsFl",
    "1KE8YSxHuRCoqhuTy0Zcccqd8u79loklh", "1RaChVGtGixBDsQCFFmG4dCYeqc8NryvF", "1KM-ylKxiFwVBjXD2DDRPigj3e7BPOsE3",
    "1K78COu8gcb77wEUsqvHKuqBUx8PJZNFU", "1Jzb-FayO7TCM69Pid4S2MbBrlfYM_iOU", "1JxpHPD2U-nJEUvuHOLypVATvD8s2dde2",
    "1JvF_dNUQxYo_rmB66orPkKnV9Hr4PuM4", "1JyEEOpQMcLDvlgJY5EsKU_LdZGN7LNsr", "1JviJBXimpFXIgHggM_DLVijW_-ZbRkaH",
    "1JeXbVGiqJlPV3am_qlLQYap7sJNQ8FPB", "1JZJs975UlyWXuB1QZXLax3nip1Hp-LMZ", "1JXVZj8tMR8iz1ZMBnimUMnecUE5HxW4k",
    "1JU_-teWbru3gBk-XzlOj7eyaeTFi73sZ", "1JRzDBciG8rHW2QsrBuuMHGiCKWCU83mY", "1JOnM9gkDAJyxVrFKMDRpK6zG2LofRrz1",
    "1JOQaiBI8A3V4_ah0ceoex3LBI4b4sVKU", "1JJ0yptqcCxTEluIl1O7ckmSNe8UyfC7t", "1JEdphVW4O6Wm7Hh2MOCcRuJ7k_nDW2Kg",
    "1JLpY1M-EFpKFT-awp2CD_ZRvZhAVXWo8", "1JCWSX0DWvALE6l_tzkAfcsjKcfw2Fgtq", "1JALR2r33G8xsypeUU3yNzqXl125id-d3",
    "1J6kfa-9_Lbh8G7MoXUXU4Ds20LMQXcmv", "1IuvZAus_PxOlM7byKwn8Aw5wGc6tl_CV", "1J7LhnsNrQ6Hi6ZiPllY7xvbP0IxmGjpi",
    "1J5g3EHThiTzyDGKow4ch2uiKa5FlHyjT", "1IkcQw467jAVCuInemkBkN8FjVAHxWQwV", "1IhgBi-5Sofy7kT3FqfRl_PZ1hejcCiCg",
    "1I_iCQrgNkBPePRS4ksvBwIMuPvGVwhdI", "1IXZzpw9cuY6ug75ZUexV3Vi19f7YgBgB", "1IY0PIETVOK2ghRZlpXqvxdWxqYGMYDMe",
    "1IXRh7nYYt0oWOw3-LX_lGh_-wP94a5_b", "1IWnLyuIFV5bUwZlmHiHxBpoHNEZNzi4m", "1IU2BDOEXrGhRyJOhQSuC7OQUg5iRGvTw",
    "1IRMPtFr0ou7TNQ_xYMeLoQGrvRkw6Jyc", "1IPSZSKPuv0Bm7h45L70ti47Pivta1XTg", "1HupYtlLugKVy1PFh40yqq8JqXK9YSMCt",
    "1IJADUXsm118sqenmUw9f9zsCHAEgLf9B", "1HvJmaI0HqhVc26836B9vSKy0x4ew4p5V", "1HpEX606ajleyodyKsPk7YnksrERP4S9e",
    "1Hky94roDXNTbVsjSvJWK_DOumrjcw4fu", "1Hg50j8a7Akbk_wQWHPmnx2cJNWdR7zL4", "1HfVryWDQLPS0vUS57xP1fogtvC4qE6UL",
    "1HgnoXM148gdCPESQU32Qfun54QHNqkF8", "1HfXlPTWXm8WB5J1O6azUpoHfgJ0TRf6K", "1HdKOYZqfNDgGFbCULUw26RrjV9DCND55",
    "1HaklEddcTaDmj8nzdSXeT0maQ-PmmvmQ", "1HX4s4hLzvoPKPvpBp-UXgHsMdDlbV6sV", "1HV7yPguUKTBnXTVaWps8VsFMVhClYxTR",
    "1HOcLgzqIPBKGtlMi7fzTPTZUP5EYiVX3", "1HKKVhV09Hgd4hHGtmOlR1sFTAAHvngrJ", "1HF762dxWyPg3k3wmJPT5Wx2e6FD4cpJ5",
    "1HDdn-Sh5HmYNKtYCq-FLXk6NPoXIDf3j", "1HAJkNkO4Uxh6wF1aW3i2nxQ5RY5MxFua", "1H9ZQt91k45EElmNF6TKiwwOu-HrmE1QT",
    "1H95chI2kEdo563Wjj4HfIkAeA5HpSTAW", "1H8ISpHugPL3nWm0UATQhtP-wSFbG22tU", "1H4aMGeS_ERG8CbCcPA7BWLTXRksF_Vmc",
    "1H0UHNSNPBpzC2H6LkACHyUp279iq39Q3", "1GU23VwJlaQmHeyw9Uiwx4dX15JUjjepG", "1a8tFLdnPFtZPfW6mTGzwI_v85ah1jY9o",
    "1a4bFhA3xhLe5qytrIHbzN5_Kr2nrSA9Z", "1a-HuwzGLh1yfm47T9FoIGRWEdO1QmPZL", "1_yABuMehPqCNvF2VGsmMfy4ZhSUe955i",
    "1_y2PzfBzG4Q7_WSEF5yLUgJyZ81iyLmO", "1_wqo5pzAg1lTRBDPVt-_UWkmyCXUgppN"
  ];
  
  return ids.map((id, index) => ({
    id: index + 21,
    fileId: id,
    title: `THRIVEON ${index + 21}`,
    description: ""
  }));
};

// Combine manually added Tobi images with generated ones
const tobiImagesManual = [
  { id: 1, fileId: "1aIFvmT42-8m012jU9NNQGvh_HCgPRxs3", title: "THRIVEON 1", description: "" },
  { id: 2, fileId: "1Xf8ufs1abAFeWPMnvT-3buNlLR1noWwo", title: "THRIVEON 2", description: "" },
  { id: 3, fileId: "1LCnugLr84e0-_bjQSOHdPNcjoIk44vLL", title: "THRIVEON 3", description: "" },
  { id: 4, fileId: "1K_s56tPaMqfG7IP6EUp1PeBaXIIbbuy4", title: "THRIVEON 4", description: "" },
  { id: 5, fileId: "1JhNBHSwm7t_mxlDHrzv2CGqio4k2oqtc", title: "THRIVEON 5", description: "" },
  { id: 6, fileId: "1JF6Xxdo7DzQYAb-mBoyo2rpYPb330waB", title: "THRIVEON 6", description: "" },
  { id: 7, fileId: "1IZVfvq8EBEx9glE1mzgVZf_8JM-rV3Db", title: "THRIVEON 7", description: "" },
  { id: 8, fileId: "1HvqMG4CVd581aBCNSYiYOcNLRDpDzg51", title: "THRIVEON 8", description: "" },
  { id: 9, fileId: "1HMcaVPfX5c6P5safK8NuLGlzG69KHtMq", title: "THRIVEON 9", description: "" },
  { id: 10, fileId: "1aIDky6LB90BMnFSxEvMHVWjO4rGA17Hn", title: "THRIVEON 10", description: "" },
  { id: 11, fileId: "1Uz6IY74Xqx32CqiiJoDZ1GOnUqqhtjZE", title: "THRIVEON 11", description: "" },
  { id: 12, fileId: "1UXN5psU0uviBpdk0GAaQw587BrV-4Wd7", title: "THRIVEON 12", description: "" },
  { id: 13, fileId: "1QmJibhbJPvWQjA8mW06M-OOKnaHg711N", title: "THRIVEON 13", description: "" },
  { id: 14, fileId: "1PA5r2uancaVbeYRr67QKQlh2ioWh9QM5", title: "THRIVEON 14", description: "" },
  { id: 15, fileId: "1XeANI2QQ40ZR3HBh14Ln2whHaBlxMnpL", title: "THRIVEON 15", description: "" },
  { id: 16, fileId: "1XGS13v5IT1qmO71hDUR32-va92NYw9H7", title: "THRIVEON 16", description: "" },
  { id: 17, fileId: "1MuC302fHe5d5g-_BbhxDiGRrRQEjZhNU", title: "THRIVEON 17", description: "" },
  { id: 18, fileId: "1MIZcauQ5zXTtV6GeL7wP8ajEh_HEOU3f", title: "THRIVEON 18", description: "" },
  { id: 19, fileId: "1LbQ3I5FG8AAo-GDlkQhcG9ltc046urC0", title: "THRIVEON 19", description: "" },
  { id: 20, fileId: "1LSk_0ZxnMnadq6IPOWVThyxOgyjf0Aae", title: "THRIVEON 20", description: "" },
];

const tobiImagesGenerated = generateTobiImages();
const allTobiImages = [...tobiImagesManual, ...tobiImagesGenerated];

// Define all sections
const gallerySections = [
  {
    id: "speakers",
    title: "Speakers 💯",
    icon: "🎤",
    images: speakersImages,
    bgColor: "from-blue-500 to-blue-600",
    count: speakersImages.length
  },
  {
    id: "ade-photography",
    title: "Thriveon Photography 2024 by Ade",
    icon: "📸",
    images: adePhotographyImages,
    bgColor: "from-amber-500 to-yellow-500",
    count: adePhotographyImages.length
  },
  {
    id: "videography",
    title: "Videography",
    icon: "🎥",
    images: videographyImages,
    bgColor: "from-green-500 to-emerald-600",
    count: videographyImages.length
  },
  {
    id: "tobi-photography",
    title: "Thriveon Incubator Launch Photography by Tobi",
    icon: "📷",
    images: allTobiImages,
    bgColor: "from-purple-500 to-pink-500",
    count: allTobiImages.length
  }
];

// Lightbox Modal Component
function LightboxModal({ images, currentIndex, onClose, onNext, onPrev }: any) {
  const image = images[currentIndex];
  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white z-10">
          <X className="w-6 h-6" />
        </button>
        <a href={getDownloadUrl(image.fileId)} download className="absolute top-4 right-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white z-10" onClick={(e) => e.stopPropagation()}>
          <Download className="w-6 h-6" />
        </a>
        {currentIndex > 0 && (
          <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white z-10">
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        {currentIndex < images.length - 1 && (
          <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white z-10">
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="relative max-w-5xl w-full max-h-[90vh]">
          <img src={getHighResImageUrl(image.fileId)} alt={image.title} className="w-full h-full object-contain rounded-lg" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
            <h3 className="text-white text-xl font-bold">{image.title}</h3>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Gallery Section Component
function GallerySection({ section }: { section: any }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [isExpanded, setIsExpanded] = useState(true);

  const handleImageClick = (image: any, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20 last:mb-0">
      <div className="flex items-center justify-between cursor-pointer mb-6 p-5 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all border border-gray-100" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${section.bgColor} flex items-center justify-center text-2xl shadow-md`}>
            {section.icon}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
            <p className="text-blue-600 text-xs mt-1 font-medium">{section.images.length} images</p>
          </div>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
      </div>

      {isExpanded && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {section.images.map((image: any, index: number) => (
            <motion.div key={image.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: (index % 12) * 0.03 }} className="group cursor-pointer" onClick={() => handleImageClick(image, index)}>
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100 aspect-square">
                {!loadedImages[image.id] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse">
                    <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
                  </div>
                )}
                <img src={getDirectImageUrl(image.fileId)} alt={image.title} className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${loadedImages[image.id] ? "opacity-100" : "opacity-0"}`} onLoad={() => setLoadedImages((prev: any) => ({ ...prev, [image.id]: true }))} onError={(e) => console.error(`Failed to load: ${image.title}`)} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white text-sm font-medium truncate">{image.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {selectedImage && <LightboxModal images={section.images} currentIndex={currentIndex} onClose={() => setSelectedImage(null)} onNext={() => setCurrentIndex(prev => prev + 1)} onPrev={() => setCurrentIndex(prev => prev - 1)} />}
    </motion.div>
  );
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16 md:pt-20">
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold mb-4">
            ThriveOn <span className="text-amber-400">Gallery</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-blue-100 text-lg">
            Capturing moments from our Incubator Launch Event
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {gallerySections.map((section) => (
            <GallerySection key={section.id} section={section} />
          ))}
        </div>
      </section>
    </main>
  );
}