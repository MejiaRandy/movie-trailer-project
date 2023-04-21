import { application, Router } from "express";
import { renderMovies,createMovie, renderMovieEdit, editMovie, deleteMovie, movieToggleDone, mantainanceAbout, renderIndex, renderOneMovie, renderLogin, loginDone, createUser, logOutDone } from "../controllers/movies.controllers";

const router = Router();

router.get("/index", renderIndex)

router.get("/", renderMovies);

router.post("/movie/add", createMovie);

router.get("/movie/:id/edit", renderMovieEdit);

router.post("/movie/:id/edit", editMovie);

router.get("/movie/:id/delete", deleteMovie);

router.get("/movie/:id/toggleDone", movieToggleDone)

router.get("/about",mantainanceAbout)

router.get("/movie/:id/view",renderOneMovie)

router.get('/login',renderLogin)

router.post('/movie/login',loginDone)

router.get('/login/logout',logOutDone)

router.post("/user/add",createUser)

export default router;
