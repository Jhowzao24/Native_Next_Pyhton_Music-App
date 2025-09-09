from django.urls import path, include # type: ignore
from .views import StudentsViews, CardViewSet, RegisterView, CustomTokenObtainPairView, LogoutView, DeleteUserView, UserDataView, Undexing
from rest_framework.routers import DefaultRouter # type: ignore
from rest_framework_simplejwt.views import TokenRefreshView
from django.contrib.auth import views as auth_views
from . import views
from .views import authenticate_user_email, UserManagementAPI, UserEmailAuthenticationAPI, UserActivityView, FeedbackView, SendMessageView, ValidateUserView, UserTokenView
from django.contrib.auth import views as auth_views


router = DefaultRouter()
router.register('ViewsStudy', StudentsViews, basename='ViewsStudy')
router.register('cards', CardViewSet, basename='view-cards')


urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('register/<int:pk>/delete/', DeleteUserView.as_view(), name='delete_user'),
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path("abrir_tkinter_datas/", views.abrir_tkinter_datas_users, name="abrir_tkinter_datas"),
    path('abrir_tkinter_register/', views.open_tkinter_users_registers, name="abrir_tkinter_register"),
    path('Urls/', include(router.urls)),
    path('', Undexing),
    path('password_reset/', auth_views.PasswordResetView.as_view(), name='password_reset'),
    path('password_reset_done/', auth_views.PasswordResetDoneView.as_view(), name='password_reset_done'),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('reset/done/', auth_views.PasswordResetCompleteView.as_view(), name='password_reset_complete'),
    path('profile/', views.get_logged_user, name='profile'),
    path('profile/update/', views.update_user_profile, name='update_user_profile'),
    path('profile/delete/', views.delete_user_account, name='delete_user_account'),
    path('authenticate-email/', authenticate_user_email, name='authenticate_email'),
    path('user/', UserEmailAuthenticationAPI.as_view(), name='user_management'),
    path('user/<int:user_id>/', UserManagementAPI.as_view(), name='user_management_email'),
    path('user/activity/', UserActivityView.as_view(), name='user-activity'),
    path('feedback/', FeedbackView.as_view(), name='feedback'),
    path('enviar-mensagem/', SendMessageView.as_view(),  name='enviar-mensagem'),
    path('validate_user/', ValidateUserView.as_view(), name='validate_user'),
    path("user_data/", UserDataView.as_view(), name="user_data"),
    path("user/token/", UserTokenView.as_view(), name="user_token"),
]