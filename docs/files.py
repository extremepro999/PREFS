# Libraries
# import glob
import os
# import frontmatter
# from pathlib import Path

# getDirs = lambda dirname: [f.path for f in os.scandir(dirname) if f.is_dir()]

# directories = [i.replace("./", "") for i in getDirs(".")]

"""
def AddVersion(directories, extension="md"):
	for folder in directories:
		
		files = glob.glob(f"{folder}/*.{extension}")

		for filename in files:
			if "versions" in filename: continue
			
			file = frontmatter.load(filename)
			
			permlink = file.metadata["permalink"]
			permlink = permlink.split("/")
			permlink[0] = folder

			file["version"] = folder

			permlink = "/".join(permlink)
			
			file["permalink"] = permlink
			frontmatter.dump(file, filename)
"""

def CopyFile(filename: str, newfilename: str):

	if os.path.exists(newfilename): os.remove(newfilename)

	with open(newfilename, "w+") as newfile:

		with open(filename) as file:
			file = file.read()
	
			newfile.write(f"{file}")

if __name__ == "__main__":
	CopyFile("/home/carlos/Documents/Projects/PREFS/Code/docs/CHANGELOG.md", "CHANGELOG.md")
	CopyFile("/home/carlos/Documents/Projects/PREFS/Code/docs/README.md", "../README.md")
