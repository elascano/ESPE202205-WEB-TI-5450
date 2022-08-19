/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package ec.edu.espe.ejmoreno.controller;

import ec.edu.espe.ejmoreno.model.Traffic;
import ec.edu.espe.ejmoreno.modelDAO.TrafficDAO;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Javier Snz
 */
@WebServlet(name = "Controlador", urlPatterns = {"/Controlador"})
public class Controlador extends HttpServlet {

    String home = "index.jsp";

    TrafficDAO trafficDAO = new TrafficDAO();

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try ( PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Controlador</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet Controlador at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String access = "";
        String accion = request.getParameter("accion");
        switch (accion) {
            case "addTraffic": {
                String crossingTime = request.getParameter("crossingTime");
                String vehicleType = request.getParameter("vehicleType");
                String typeOfTracks = request.getParameter("typeOfTracks");
                int numberOfVehicles = Integer.parseInt(request.getParameter("numberOfVehicles"));

                Traffic traffic = new Traffic();

                traffic.setCrossingTime(crossingTime);
                traffic.setNumberOfVehicles(numberOfVehicles);
                traffic.setTypeOfTracks(typeOfTracks);
                traffic.setVehicleType(vehicleType);
                
                System.out.println(traffic);
                
                trafficDAO.addTraffic(traffic);

                access = home;
            }
            break;
        }

        RequestDispatcher view = request.getRequestDispatcher(access);
        view.forward(request, response);

        processRequest(request, response);
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
