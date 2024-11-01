import os
import shutil

#Copiar cada imagen de la carpeta "resources/android/[splash, icon]" a la carpeta "android/app/src/main/res/"

# "resources/android/splash"
ruta_imagenes = os.path.join(os.getcwd(), "resources", "android", "splash")

# "resources/android/icon"
ruta_iconos = os.path.join(os.getcwd(), "resources", "android", "icon")

# "android/app/src/main/res/"
ruta_destino = os.path.join(os.getcwd(), "android", "app", "src", "main", "res")

try:
    # Recorrer el directorio de imagenes o iconos
    for imagen in os.listdir(ruta_iconos):
        # Obtener la ruta de la imagen
        resto_ruta = "-".join(imagen.split("-")[:-1]) # drawable-land-hdpi
        nombre_imagen = "splash.png" if "screen" in imagen else "icon.png"
        
        print(resto_ruta, "->", nombre_imagen) # drawable-land-hdpi -> screen.png
        
        # Obtener la ruta de destino
        if not os.path.exists(os.path.join(ruta_destino, resto_ruta)):
            os.mkdir(os.path.join(ruta_destino, resto_ruta))
        
        #Eliminar la imagen si ya existe
        if os.path.exists(os.path.join(ruta_destino, resto_ruta, nombre_imagen)):
            os.remove(os.path.join(ruta_destino, resto_ruta, nombre_imagen))
            
        # Copiar la imagen
        path_Archivo = shutil.copy2(os.path.join(ruta_iconos, imagen), os.path.join(ruta_destino, resto_ruta, nombre_imagen))
        
        print(f"Imagen {imagen} copiada a {path_Archivo}")
except Exception as e:
    print("Error ->",e)