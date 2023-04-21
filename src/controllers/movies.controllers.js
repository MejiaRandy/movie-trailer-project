import movies from "../models/movies";
import login from "../models/login"

let si = true

export const renderIndex = async(req,res)=>{
  const movi = await movies.find().lean();
  res.render("index", { movies: movi,si });
}

export const renderMovies = async (req, res) => {
  const movie =  await movies.find().lean()
  
  res.render("principal",{movies: movie, si});
  
};

export const createMovie = async (req, res) => {
  try {
    const movie = movies(req.body);
    const movieSave = await movie.save();
    console.log(movieSave);
    res.redirect("../../index")
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async(req,res)=>{
  try {
    console.log(req.body)
    const user = login(req.body);
    const userSave = await user.save();
    console.log(userSave)
    res.send('guardado')
  } catch (error) {
    console.log(error)
  }
}

export const renderMovieEdit = async (req, res) => {
  try {
    const movie = await movies.findById(req.params.id).lean();

    res.render("edit", { movie });
  } catch (error) {
    console.log(error.message);
  }
};

export const editMovie = async (req, res) => {
  const { id } = req.params;
  await movies.findByIdAndUpdate(id, req.body);
  res.redirect("../../index");
};

export const deleteMovie = async (req, res) => {
  const { id } = req.params;
  await movies.findByIdAndDelete(id, req.body);
  res.redirect("../../index");
};

export const movieToggleDone = async (req, res) => {
  const { id } = req.params;

  const movie = await movies.findById(id);

  movie.done = !movie.done;

  await movie.save();
  res.redirect("../../index");
};

export const mantainanceAbout = async(req,res)=>{
const movi = await movies.find().lean();
  res.render('about', { movies: movi,si })

}

export const renderOneMovie = async(req,res)=>{
  try {
    const movi = await movies.findById(req.params.id).lean();
    
    res.render("movie",{si,movi});
    console.log(movi)
  } catch (error) {
    console.log(error.message);
  }
}

export const renderLogin = async(req,res)=>{
  res.render('login')
}

export const loginDone = async(req,res)=>{
  const {username}=req.body;
  const {password}=req.body;
  try {
    const log = await login.find({username: String(username),password: String(password)})
    console.log(password,username)
    if(log==""){
      si=false
      res.redirect('../login')
    }else{
      si=true
      res.redirect('/')
    }
  } catch (error) {
    console.log(error)
  }
}

export const logOutDone = (req,res)=>{
  try {
    si=false
    res.redirect('/')
  } catch (error) {
    console.log(error)
  }
}