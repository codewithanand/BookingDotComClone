import express from 'express'

import { countByCity, createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from '../controllers/hotel.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

// CREATE
router.post("/", verifyAdmin, createHotel)
// UPDATE
router.put("/:id", verifyAdmin, updateHotel)
// DELETE
router.delete("/:id", verifyAdmin, deleteHotel)
// GET
router.get("/find/:id", getHotel)
// GET ALL
router.get("/", getAllHotels)
// COUNT BY CITY NAME
router.get("/countByCity", countByCity)
// COUNT BY TYPE
router.get("/countByType", getAllHotels)

export default router