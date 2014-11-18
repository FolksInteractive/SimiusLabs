// Setting temporary storage path for Modulus
// By default, CFS uses a temporary folder blocked by Modulus on the server
FS.TempStore.Storage = new FS.Store.FileSystem("_tempstore", {
  internal : true,
  path : process.env.TMP || null
});