const asyncHandler = require("express-async-handler");

const GalleryItem = require("../models/galleryItemModel.js");

// @desc Create item
// @route POST /api/items/create
// @access Admin
const createItem = asyncHandler(async (req, res) => {
  if (!req.user.isAdmin) {
    res.status(401);
    throw new Error("Non autorisé en tant qu'administrateur");
  }
  const { title, description, category, url } = req.body;
  if (!["image", "video"].includes(category)) {
    res.status(400);
    throw new Error("Catégorie non valide");
  }
  const itemExist = await GalleryItem.findOne({ title });
  if (itemExist) {
    res.status(400);
    throw new Error("Le nom de l'élément existe déjà");
  } else {
    const item = new GalleryItem({
      title,
      description,
      category,
      url,
      // user: req.user._id,
    });
    if (item) {
      const createditem = await item.save();
      res.status(201).json(createditem);
    } else {
      res.status(404);
      throw new Error("Données élément invalides");
    }
  }
});

// @desc Edit item
// @route PUT /api/item
// @access Admin
const editItem = asyncHandler(async (req, res) => {
  if (!req.user.isAdmin) {
    res.status(401);
    throw new Error("Non autorisé en tant qu'administrateur");
  }
  const { title, description, category, url } = req.body;
  if (!["image", "video"].includes(category)) {
    res.status(400);
    throw new Error("Catégorie non valide");
  }
  const item = await GalleryItem.findById(req.params.id);
  if (item) {
    item.title = title || item.title;
    item.description = description || item.description;
    item.category = category || item.category;
    item.url = url || item.url;

    const updatedItem = await item.save();
    res.json(updatedItem);
  } else {
    res.json(404);
    throw new Error("Élément non trouvé");
  }
});

// @desc Delete product
// @route DELETE /api/products/:id
// @access Admin
const itemDelete = asyncHandler(async (req, res) => {
  if (!req.user.isAdmin) {
    res.status(401);
    throw new Error("Non autorisé en tant qu'administrateur");
  }

  const itemId = req.params.id;

  try {
    const item = await GalleryItem.findById(itemId);

    if (!item) {
      res.status(404);
      throw new Error("Élément non trouvé");
    }

    await GalleryItem.deleteOne({ _id: itemId });
    res.json({ message: "Élément supprimé avec succès" });
  } catch (error) {
    console.error("Erreur lors de la suppression de l'élément:", error.message);
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression de l'élément" });
  }
});

// @desc Fetch all items
// @route GET /api/items
// @access Public
const getAllItems = asyncHandler(async (req, res) => {
  const pageSize = 4; // Nombre de items par page
  const page = Number(req.query.pageNumber) || 1; // Récupérer le numéro de page

  // Utilisation correcte du mot-clé pour la recherche
  const keyword = req.query.keyword
    ? {
        title: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};
  // Catégorie pour filtrer
  const category = req.query.category;

  // Construire l'objet filters
  const filters = {
    ...keyword,
    ...(category && ["image", "video"].includes(category) ? { category } : {}),
    ...(req.query.sizes ? { sizes: { $in: req.query.sizes.split(",") } } : {}),
    ...(req.query.colors
      ? { colors: { $in: req.query.colors.split(",") } }
      : {}),
  };

  // Compter les éléments correspondant aux filtres
  const count = await GalleryItem.countDocuments(filters);

  // Récupérer les éléments avec les filtres et la pagination
  const items = await GalleryItem.find(filters)
    .sort({ _id: -1 })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({
    items,
    page,
    pages: Math.ceil(count / pageSize),
    count, // Nombre total d'éléments correspondant au mot-clé
  });
});

// @desc Admin get all items
// @route GET /api/items/all
// @access Private
const getAllItemsAdmin = asyncHandler(async (req, res) => {
  if (!req.user.isAdmin) {
    res.status(401);
    throw new Error("Non autorisé en tant qu'administrateur");
  }

  const pageSize = 4;
  const page = Number(req.query.pageNumber) || 1;

  // Utilisation correcte du mot-clé pour la recherche
  const keyword = req.query.keyword
    ? {
        title: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};
  // Catégorie pour filtrer
  const category = req.query.category;

  // Construire l'objet filters
  const filters = {
    ...keyword,
    ...(category && ["image", "video"].includes(category) ? { category } : {}),
    ...(req.query.sizes ? { sizes: { $in: req.query.sizes.split(",") } } : {}),
    ...(req.query.colors
      ? { colors: { $in: req.query.colors.split(",") } }
      : {}),
  };

  // Compter les éléments correspondant aux filtres
  const count = await GalleryItem.countDocuments(filters);

  // Récupérer les éléments avec les filtres et la pagination
  const items = await GalleryItem.find(filters)
    .sort({ _id: -1 })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({
    items,
    page,
    pages: Math.ceil(count / pageSize),
    count, // Nombre total d'éléments correspondant au mot-clé
  });
});

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
const getSingleItem = asyncHandler(async (req, res) => {
  const item = await GalleryItem.findById(req.params.id);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: "Élément non trouvé" });
  }
});

module.exports = {
  createItem,
  editItem,
  itemDelete,
  getAllItems,
  getAllItemsAdmin,
  getSingleItem,
};
