import logging
import json

import math
from mpl_toolkits.mplot3d import axes3d
import matplotlib.pyplot as plt
from matplotlib import cm
import matplotlib.patches as mpatches
import matplotlib.lines as mlines

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from google.cloud.firestore_v1.field_path import FieldPath
from datetime import datetime

# Use a service account.
cred = credentials.Certificate('../Flows_Node-RED/digital-twin-abb-irb-2600-firebase-adminsdk-m2ovi-6adceb9f19.json')

app = firebase_admin.initialize_app(cred)

db = firestore.client()

abb_irb_2600_ref = db.collection('abb_irb_2600')


def get_docs():

    query = abb_irb_2600_ref.order_by("timestamp", direction=firestore.Query.DESCENDING).limit(500)
    return query.stream()





counter = 0
i = 0
timestamp_graph = []
welding_graph = []
x_pos_graph = []
y_pos_graph = []
z_pos_graph = []
coolant_level = []
results = get_docs()
for doc in results:

    dict = doc.to_dict()
    #print(dict)
    #print(dict["timestamp"])
    #dict["timestamp"] = str(datetime.fromtimestamp(float(dict["timestamp"])/1000.000))
    #print(f"{doc.id} => {dict}")
    i+=1
    #try: 

    #print(float(dict["abb/irb2600/x_pos"]))
    timestamp_graph.insert(0, float(dict["timestamp"]))
    welding_graph.insert(0, 1 if dict["abb/irb2600/welding"] == 'TRUE' else 0)
    x_pos_graph.insert(0, float(dict["abb/irb2600/x_pos"])) 
    y_pos_graph.insert(0, float(dict["abb/irb2600/y_pos"]))
    z_pos_graph.insert(0, float(dict["abb/irb2600/z_pos"]))  

    #except Exception:

        #print(Exception.args)
        #pass

x_pos_graph = x_pos_graph[121:483]
y_pos_graph = y_pos_graph[121:483]
z_pos_graph = z_pos_graph[121:483]
timestamp_graph = timestamp_graph[121:483]
welding_graph = welding_graph[121:483]

timestamp_graph = list(map(lambda x: (x - timestamp_graph[0])/1000.000, timestamp_graph))
#print(y_pos_graph, len(y_pos_graph))
#print(x_pos_graph, len(x_pos_graph))
#print(timestamp_graph, len(timestamp_graph))
#print(welding_graph, len(welding_graph))

# create figure and axis objects with subplots()
fig,ax = plt.subplots()

ax.plot(timestamp_graph,
        z_pos_graph,
        color="blue", 
        marker="*")

# set x-axis label
ax.set_xlabel("Tempo de execução (s)", fontsize = 28, color="black")
# set y-axis label
ax.set_ylabel("Posição eixo z (mm)",
              color="black",
              fontsize=28)

# twin object for two different y-axis on the sample plot
ax2=ax.twinx()
# make a plot with different y-axis using second axis object
ax2.plot(timestamp_graph, welding_graph,color="red",marker=".")
ax2.set_ylabel("Soldagem ativada ou desativada\n(1: Ativo; 0: Inativo)",color="black",fontsize=28)
ax2.set_ylim(0.0, 1.5)

blue_line = mlines.Line2D([], [], color='blue', marker='*',
                          markersize=10, label='Posição TCP Z (mm)')

red_line = mlines.Line2D([], [], color='red', marker='.',
                          markersize=10, label='Soldagem ((1: Ativo; 0: Inativo))')
#red_patch = mpatches.Patch(color="red",marker=".", label='Carga (%)')
#blue_patch = mpatches.Patch(color="blue",marker="o", label='Posição atuador Z (mm)')
plt.legend(handles=[blue_line, red_line], prop={'size': 24})

ax.set_ylim(0, 50)
ax.grid()
#ax2.grid()
plt.title('Dados de posição Z (Vertical) e soldagem\n ativada ou desativada', fontweight='bold',fontsize=30)
plt.show()
# save the plot as a file
fig.savefig('two_different_y_axis_for_single_python_plot_with_twinx.jpg',
            format='jpeg',
            dpi=100,
            bbox_inches='tight')

#x_pos_graph = x_pos_graph[0:timestamp_graph.index(554)]
#y_pos_graph = y_pos_graph[0:timestamp_graph.index(554)]
#z_pos_graph = z_pos_graph[0:timestamp_graph.index(554)]
#timestamp_graph = timestamp_graph[0:timestamp_graph.index(554)]
#print(timestamp_graph, len(timestamp_graph))
ax3d= plt.figure().add_subplot(projection='3d')
#X, Y, Z = axes3d.get_test_data(0.05)

ax3d.plot(x_pos_graph, timestamp_graph, y_pos_graph)  # Plot contour curves

ax3d.set_zlabel("Posição eixo y (mm)", fontsize = 20, color="black")
ax3d.set_xlabel("Posição eixo x (mm)", fontsize = 20, color="black")
# set y-axis label
ax3d.set_ylabel("Tempo de execução do programa (s)",
              color="black",
              fontsize=20)

blue_line = mlines.Line2D([], [], color='blue', marker='_',
                          markersize=10, label='Caminho percorrido pelo TCP na soldagem.')
plt.legend(handles=[blue_line], prop={'size': 18})
plt.title('Exemplo de movimentação do TCP durante a execução \n do programa pirâmide sem orientação', fontweight='bold',fontsize=26)
plt.show()
"""
for ii in range(0,180,1):
    ax3d.view_init(elev=ii, azim=ii)
    plt.savefig("./movie/movie%d.png" % ii)
"""

